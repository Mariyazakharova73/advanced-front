import {
  ReduxStoreWithManager,
  StateSchema,
  ThunkConfig,
  ThunkExtraArg,
} from './config/StateSchema';
import { createReduxStore, type AppDispatch } from './config/store';
import StoreProvider from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
  type AppDispatch,
  type ReduxStoreWithManager,
  type StateSchema,
  type ThunkConfig,
  type ThunkExtraArg,
};
