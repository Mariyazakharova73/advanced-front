import {
  createEntityAdapter,
  createSlice,
  EntityId,
  type PayloadAction,
} from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { type Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapter = createEntityAdapter<Comment, EntityId>({
  selectId: (comment: Comment) => comment.id,
});

// Селекторы
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state: StateSchema) =>
    state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    // из EntityState
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
        },
      )

      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
