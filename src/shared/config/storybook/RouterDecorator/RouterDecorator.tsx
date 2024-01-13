import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RouterDecorator = (Story: any) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
