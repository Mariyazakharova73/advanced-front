import { configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { type NavigateFunction } from 'react-router-dom';
import { createReducerManager } from './reducerManager';
import { type StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction,
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  // const extraArg: ThunkExtraArg = {
  //   navigate,
  // };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<any>,
    preloadedState: initialState,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({
    //     thunk: {
    //       extraArgument: extraArg,
    //     },
    //   }),
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
