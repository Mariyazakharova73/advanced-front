import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../selectors/articles';

interface fetchArticlesListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  fetchArticlesListProps,
  ThunkConfig<string>
>(
  'ArticlesPage/fetchArticlesList',

  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
    const { page = 1 } = args;
    const limit = getArticlesPageLimit(getState());
    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      if (!res.data) {
        throw new Error();
      }
      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
