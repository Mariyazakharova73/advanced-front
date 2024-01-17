import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import LoginForm from './LoginForm';
const meta = {
  title: 'feature/LoginForm',
  component: LoginForm,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  StoreDecorator({ loginForm: { username: 'mary', password: '2333' } }),
  ThemeDecorator(Theme.LIGHT),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({ loginForm: { username: 'mary', password: '2333' } }),
  ThemeDecorator(Theme.DARK),
];
