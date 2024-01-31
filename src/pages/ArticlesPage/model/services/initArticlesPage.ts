import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticlesPageInited } from '../selectors/articles';
import { articlesPageActions } from '../slices/ArticlePageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'ArticlesPage/initArticlesPage',

  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    try {
      const inited = getArticlesPageInited(getState());

      if (!inited) {
        dispatch(articlesPageActions.initState());
        dispatch(fetchArticlesList());
      }
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
