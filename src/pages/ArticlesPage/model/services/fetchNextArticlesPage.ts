import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticlesPageHasMore, getArticlesPageNum } from '../selectors/articles';
import { articlesPageActions } from '../slices/ArticlePageSlice';
import { fetchArticlesList } from './fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'ArticlesPage/fetchNextArticlesPage',

  async (_, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;

    try {
      const hasMore = getArticlesPageHasMore(getState());
      const page = getArticlesPageNum(getState());

      if (hasMore) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList());
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
