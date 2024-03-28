import cn from 'classnames';
import { CommentList } from 'entities/Comment';
import AddCommentForm from 'feature/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Text from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticleThunk } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/ArticleDetailsCommentsSlice';
import s from './ArticleDetailsComments.module.css';

export interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

const ArticleDetailsComments: FC<ArticleDetailsCommentsProps> = props => {
  const { className, id } = props;
  const { t } = useTranslation('articlesPage');
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticleThunk(value));
    },
    [dispatch],
  );

  return (
    <div className={cn(s.ArticleDetailsComments, className)}>
      <Text title={t('comments')} className={s.commentTitle} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </div>
  );
};

export default ArticleDetailsComments;
