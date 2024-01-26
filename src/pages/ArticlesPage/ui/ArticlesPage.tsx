import cn from 'classnames';
import { ArticleView, ArticleViewSelector } from 'entities/Article';
import ArticleList from 'entities/Article/ui/ArticleList/ArticleList';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/articles';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import {
  ArticlePageReducer,
  articlesPageActions,
  getArticles,
} from '../model/slices/ArticlePageSlice';
import s from './ArticlesPage.module.css';

export interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  ArticlesPage: ArticlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={cn(s.ArticlesPage, className)}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList view={view} articles={articles} isLoading={isLoading} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
