import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getUserAuthData } from 'entities/User';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticleThunk = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'ArticleDetails/addCommentForArticleThunk',

  async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

    const userData = getUserAuthData(getState());
    const articleId = getArticleDetailsData(getState())?.id;
    
    if (!userData || !text || !articleId) {
      rejectWithValue('no data');
    }

    try {
      const res = await extra.api.post<Comment>('/comments', {
        articleId: articleId,
        userId: userData?.id,
        text,
      });

      if (!res.data) {
        throw new Error();
      }
      // Для обновления списка статей при добавлении новой
      // Как и при init ArtcleDetailsPage
      dispatch(fetchCommentsByArticleId(articleId));
      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
