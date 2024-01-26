import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.ArticlesPage?.isLoading;

export const getArticlesPagesError = (state: StateSchema) => state.ArticlesPage?.error;

export const getArticlesPageView = (state: StateSchema) =>
  state.ArticlesPage?.view || ArticleView.SMALL;
