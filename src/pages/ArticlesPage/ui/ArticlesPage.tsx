import cn from 'classnames';
import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Page from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { initArticlesPage } from '../model/services/initArticlesPage';
import { ArticlePageReducer } from '../model/slices/ArticlePageSlice';
import ArticleInfiniteList from './ArticleInfiniteList/ArticleInfiniteList';
import s from './ArticlesPage.module.css';
import ArticlesPageFilters from './ArticlesPageFilters/ArticlesPageFilters';

export interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducerList = {
  ArticlesPage: ArticlePageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnMount={false}>
      <Page className={cn(s.ArticlesPage, className)} onScrollEnd={onLoadNextPart}>
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
