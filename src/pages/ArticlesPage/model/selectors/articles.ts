import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ArticleSortField, ArticleView } from 'entities/Article';

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

export const getArticlesPageOrder = (state: StateSchema) =>
  state.ArticlesPage?.order || 'asc';
export const getArticlesPageSort = (state: StateSchema) =>
  state.ArticlesPage?.sort || ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateSchema) =>
  state.ArticlesPage?.search ?? '';
