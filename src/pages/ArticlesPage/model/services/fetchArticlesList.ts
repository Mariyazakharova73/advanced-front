import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../selectors/articles';

export interface fetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps | undefined,
  ThunkConfig<string>
>(
  'ArticlesPage/fetchArticlesList',

  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());

    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlesPageType(getState());
    try {
      addQueryParams({ sort, order, search, type });

      const res = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!res.data) {
        throw new Error();
      }
      return res.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
