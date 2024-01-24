import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { getUserAuthData } from 'entities/User'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
Comment,
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
string,
ThunkConfig<string>
>(
  'Articledetails/sendComment',

  async (text, thunkAPI) => {
    const { extra, rejectWithValue, getState, dispatch } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data')
    }

    try {
      const res = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      })

      if (!res.data) {
        throw new Error()
      }
      dispatch(fetchCommentsByArticleId(article.id))

      return res.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)
