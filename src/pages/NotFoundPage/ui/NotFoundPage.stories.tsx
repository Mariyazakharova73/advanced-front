import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import NotFoundPage from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
