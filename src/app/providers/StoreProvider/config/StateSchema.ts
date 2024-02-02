import {
  type AnyAction,
  type EnhancedStore,
  type Reducer,
  type ReducersMapObject,
} from '@reduxjs/toolkit';
import { type AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ProfileSchema } from 'entities/Profile';
import { type UserSchema } from 'entities/User';
import { LoginSchema } from 'feature/AuthByUserName';
import { ScrollSaveSchema } from 'feature/ScrollSave';
import { AddCommentFormSchema } from 'feature/addCommentForm';
import {
  ArticleDetailsCommentsSchema,
  ArticleRecommendationsSchema,
} from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';

export interface StateSchema {
  user: UserSchema;
  scrollSave: ScrollSaveSchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  addCommentForm?: AddCommentFormSchema;
  ArticlesPage?: ArticlesPageSchema;
  articleRecommendations?: ArticleRecommendationsSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => any;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - reducer вмонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

// 3 арг. в createAsyncThunk
export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
