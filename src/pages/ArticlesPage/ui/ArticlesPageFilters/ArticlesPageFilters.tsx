import cn from 'classnames';
import {
  ArtcleTypeTabs,
  ArticleSortField,
  ArticleSortSelector,
  ArticleView,
  ArticleViewSelector,
} from 'entities/Article';
import { ArticleType } from 'entities/Article/model/types/article';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from 'shared/lib/hooks/useDebounce';
import { SortOrder } from 'shared/types';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../model/selectors/articles';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import { articlesPageActions } from '../../model/slices/ArticlePageSlice';
import s from './ArticlesPageFilters.module.css';

export interface ArticlesPageFiltersProps {
  className?: string;
}

const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = props => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation('articlesPage');

  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (newSearch: string) => {
      dispatch(articlesPageActions.setSearch(newSearch));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [debouncedFetchData, dispatch],
  );

  return (
    <div className={cn(className)}>
      <GridStack justify="between" gap="8">
        <ArticleSortSelector
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
          sort={sort}
          order={order}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </GridStack>
      <Card className={s.search}>
        <Input placeholder={t('search')} onChange={onChangeSearch} value={search} />
      </Card>
      <ArtcleTypeTabs value={type} onChangeType={onChangeType} />
    </div>
  );
};

export default ArticlesPageFilters;
