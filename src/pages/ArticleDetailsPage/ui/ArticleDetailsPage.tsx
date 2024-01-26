import cn from 'classnames';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import AddCommentForm from 'feature/addCommentForm/ui/AddCommentForm/AddCommentForm';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Button from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { addCommentForArticleThunk } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/ArticleDetailsCommentsSlice';
import s from './ArticleDetailsPage.module.css';

export interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articlesPage');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSendComment = useCallback(
    (value: string) => {
      dispatch(addCommentForArticleThunk(value));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return <div className={cn(s.ArticleDetails, className)}>{t('articleNotFound')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <div className={cn(s.ArticleDetailsPage, className)}>
        <Button onClick={onBackToList}>{t('back')}</Button>
        <ArticleDetails id={id} />
        <Text title={t('comments')} className={s.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
