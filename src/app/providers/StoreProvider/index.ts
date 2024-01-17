import {
  type StateSchema,
  type ThunkConfig,
  type ThunkExtraArg,
} from './config/StateSchema';
import { createReduxStore, type AppDispatch } from './config/store';
import StoreProvider from './ui/StoreProvider';

export {
  StoreProvider,
  createReduxStore,
  type AppDispatch,
  type StateSchema,
  type ThunkConfig,
  type ThunkExtraArg,
};
