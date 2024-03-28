import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetails/fetchArticleById',

  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      if (!articleId) {
        throw new Error();
      }
      const res = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!res.data) {
        throw new Error();
      }
      return res.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);
