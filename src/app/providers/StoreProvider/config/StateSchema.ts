import { type EnhancedStore } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  user: UserSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  // getReducerMap: () => ReducersMapObject<StateSchema>
  // reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  // add: (key: StateSchemaKey, reducer: Reducer) => void
  // remove: (key: StateSchemaKey) => void
}

export interface ThunkExtraArg {
  // api: AxiosInstance
  // navigate?: NavigateFunction
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
