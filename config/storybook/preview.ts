import type { Preview } from '@storybook/react';

import { Theme } from '../../src/app/providers/ThemeProvider/index';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { i18nDecorator } from 'shared/config/storybook/i18nDecorator/i18nDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StyleDecorator,
    RouterDecorator,
    i18nDecorator,
  ],
};

export default preview;
