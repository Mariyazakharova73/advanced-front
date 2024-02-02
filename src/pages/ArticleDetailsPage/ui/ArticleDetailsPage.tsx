import cn from 'classnames';
import { ArticleDetails, ArticleView } from 'entities/Article';
import ArticleList from 'entities/Article/ui/ArticleList/ArticleList';
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
import Page from 'widgets/Page/Page';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations';
import { addCommentForArticleThunk } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../model/slices/ArticleDetailsCommentsSlice';
import {
  articleRecommendationsReducer,
  getArticleRecommendations,
} from '../model/slices/articleRecommendationsSlice';
import s from './ArticleDetailsPage.module.css';

export interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articlesPage');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
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
    dispatch(fetchArticleRecommendations());
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <Page className={cn(s.ArticleDetails, className)}>{t('articleNotFound')}</Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <Page className={cn(s.ArticleDetailsPage, className)}>
        <Button onClick={onBackToList}>{t('back')}</Button>
        <ArticleDetails id={id} />
        <Text title={t('recomendations')} className={s.commentTitle} />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          view={ArticleView.SMALL}
          className={s.recommendations}
          target="_blank"
        />
        <Text title={t('comments')} className={s.commentTitle} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
