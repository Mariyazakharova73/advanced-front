import { createEntityAdapter, createSlice, EntityId } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from 'entities/Article';
import { type ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations';

const recommendationAdapter = createEntityAdapter<Article, EntityId>({
  selectId: (article: Article) => article.id,
});

// Селекторы
export const getArticleRecommendations = recommendationAdapter.getSelectors<StateSchema>(
  (state: StateSchema) =>
    state.articleRecommendations || recommendationAdapter.getInitialState(),
);

const articleRecommendationsSlice = createSlice({
  name: 'ArticleRecommendationsSlice',
  initialState: recommendationAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    // из EntityState
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationAdapter.setAll(state, action.payload);
      })

      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const {
  reducer: articleRecommendationsReducer,
  actions: articleRecommendationsActions,
} = articleRecommendationsSlice;
