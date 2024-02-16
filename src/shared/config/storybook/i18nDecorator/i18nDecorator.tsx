import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../config/i18n/i18n';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const i18nDecorator = (Story: any) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
