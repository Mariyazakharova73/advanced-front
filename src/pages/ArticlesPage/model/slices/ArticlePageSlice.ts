import {
  createEntityAdapter,
  createSlice,
  EntityId,
  PayloadAction,
} from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { Article, ArticleView } from 'entities/Article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const articlesAdapter = createEntityAdapter<Article, EntityId>({
  selectId: (article: Article) => article.id,
});

// Селекторы
export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state: StateSchema) => state.ArticlesPage || articlesAdapter.getInitialState(),
);

const ArticlePageSlice = createSlice({
  name: 'ArticlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    // из EntityState
    ids: [],
    entities: {},
    view: ArticleView.BIG,
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: state => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView;
      state.view = view;
      state.limit = view === ArticleView.BIG ? 4 : 9;
      state._inited = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticlesList.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
      })

      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: ArticlePageReducer, actions: articlesPageActions } =
  ArticlePageSlice;
