import { type Reducer } from '@reduxjs/toolkit';
import { type ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { type StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect, type FC, type ReactNode } from 'react';
import { useStore } from 'react-redux';

interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  children?: ReactNode;
  removeAfterUnMount?: boolean;
}

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer;
};

// Для добавления редюсеров асинхронно
const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  children,
  removeAfterUnMount = true,
  reducers, // counter, login, user
}) => {
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.dispatch({ type: '@INIT' });
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
    });

    return () => {
      if (removeAfterUnMount) {
        store.dispatch({ type: '@DESTROY' });
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};

export default DynamicModuleLoader;

