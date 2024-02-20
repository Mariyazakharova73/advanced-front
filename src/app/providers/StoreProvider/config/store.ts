import { configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { scrollSaveReducer } from 'feature/ScrollSave/model/slices/ScrollSaveSlice';
import { $api } from 'shared/api/api';
import { rtkApi } from 'shared/api/rtkApi';
import { isDev } from 'shared/const/common';
import { createReducerManager } from './reducerManager';
import { ThunkExtraArg, type StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reducer: reducerManager.reduce as Reducer<any>,
    devTools: isDev,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
