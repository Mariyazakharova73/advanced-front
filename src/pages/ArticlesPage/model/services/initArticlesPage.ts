import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { ArticleSortField } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { getArticlesPageInited } from '../selectors/articles';
import { articlesPageActions } from '../slices/ArticlePageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'ArticlesPage/initArticlesPage',

  async (searchParams, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    try {
      const inited = getArticlesPageInited(getState());

      if (!inited) {
        const orderFromUrl = searchParams.get('order') as SortOrder;
        const sortFromUrl = searchParams.get('sort') as ArticleSortField;
        const searchFromUrl = searchParams.get('search');

        if (orderFromUrl) {
          dispatch(articlesPageActions.setOrder(orderFromUrl));
        }
        if (sortFromUrl) {
          dispatch(articlesPageActions.setSort(sortFromUrl));
        }
        if (searchFromUrl) {
          dispatch(articlesPageActions.setSearch(searchFromUrl));
        }

        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList());
      }
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
