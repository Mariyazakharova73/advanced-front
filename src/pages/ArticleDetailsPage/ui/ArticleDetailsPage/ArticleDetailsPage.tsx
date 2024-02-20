import cn from 'classnames';
import { ArticleDetails } from 'entities/Article';
import RecommendList from 'feature/RecommendList/ui/RecommendList';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Page from 'widgets/Page/Page';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticleThunk } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/ArticleDetailsCommentsSlice';
import { articleRecommendationsReducer } from '../../model/slices/articleRecommendationsSlice';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
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

  if (!id) {
    return (
      <Page className={cn(s.ArticleDetails, className)}>{t('articleNotFound')}</Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <Page className={cn(s.ArticleDetailsPage, className)}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <RecommendList />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
