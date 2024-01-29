import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.ArticlesPage?.isLoading;

export const getArticlesPagesError = (state: StateSchema) => state.ArticlesPage?.error;

export const getArticlesPageView = (state: StateSchema) =>
  state.ArticlesPage?.view || ArticleView.SMALL;

export const getArticlesPageNum = (state: StateSchema) => state.ArticlesPage?.page || 1;

export const getArticlesPageLimit = (state: StateSchema) =>
  state.ArticlesPage?.limit || 9;

export const getArticlesPageHasMore = (state: StateSchema) =>
  state.ArticlesPage?.hasMore || true;

export const getArticlesPageInited = (state: StateSchema) =>
  state.ArticlesPage?._inited || false;
