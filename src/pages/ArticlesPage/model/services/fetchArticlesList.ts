import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'ArticlesPage/fetchArticlesList',

  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
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
