import { StoreProvider } from 'app/providers/StoreProvider';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'feature/AuthByUserName/model/slice/loginSlice';
import { ReducerList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducerList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  // eslint-disable-next-line react/display-name
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducerList) => (Story: any) => (
    <StoreProvider
      initialState={state as StateSchema}
      asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
      <Story />
    </StoreProvider>
  );
