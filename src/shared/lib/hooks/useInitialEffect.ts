import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (!process.env.STORYBOOK_APP) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
