import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

export const getArticleRecommendationsIsLoading = (state: StateSchema) =>
  state.articleRecommendations?.isLoading;

export const getArticleRecommendationsError = (state: StateSchema) =>
  state.articleRecommendations?.error;
