import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import PageError from './PageError';

const meta = {
  title: 'pages/PageError',
  component: PageError,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof PageError>;

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
