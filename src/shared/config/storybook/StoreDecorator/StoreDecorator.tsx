import { StoreProvider } from 'app/providers/StoreProvider';
import { type StateSchema } from 'app/providers/StoreProvider/config/StateSchema';

// eslint-disable-next-line react/display-name
export const StoreDecorator = (state: any) => (Story: any) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);
