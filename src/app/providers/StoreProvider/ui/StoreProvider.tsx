import { type ReducersMapObject } from '@reduxjs/toolkit';
import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { type StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

export interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(
    initialState,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
