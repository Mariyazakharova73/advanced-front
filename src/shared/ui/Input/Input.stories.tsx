import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Input from './Input';
const meta = {
  title: 'shared/Input',
  component: Input,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Введите имя',
    value: 'Мария',
  },
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
  args: {
    placeholder: 'Введите имя',
    value: 'Мария',
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
