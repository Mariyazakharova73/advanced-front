import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Button, { ButtonSizes, ButtonTheme } from './Button';

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

export const PrimaryDarkTheme: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.PRIMARY,
  },
};

PrimaryDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimaryLight: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_LIGHT,
  },
};

export const PrimaryLightThemeDark: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.PRIMARY_LIGHT,
  },
};

PrimaryLightThemeDark.decorators = [ThemeDecorator(Theme.DARK)];


export const Clear: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDarkTheme: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.CLEAR,
  },
};

ClearDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDarkTheme: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
  },
};

OutlineDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSizeL: Story = {
  args: {
    children: 'Button',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSizes.L,
  },
};
