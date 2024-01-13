import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Button, { ThemeButton } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
  },
};

export const ClearDarkTheme: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.CLEAR,
  },
};

export const OutlineDarkTheme: Story = {
  args: {
    children: 'Button',
    theme: ThemeButton.OUTLINE,
  },
};

OutlineDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
ClearDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
