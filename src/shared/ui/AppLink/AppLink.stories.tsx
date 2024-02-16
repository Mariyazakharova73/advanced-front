import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLinkTheme } from '../../ui/AppLink/AppLink';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import AppLink from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'text', theme: AppLinkTheme.PRIMARY },
};

export const PrimaryThemeDark: Story = {
  args: { children: 'text', theme: AppLinkTheme.PRIMARY },
};

PrimaryThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light: Story = {
  args: { children: 'text', theme: AppLinkTheme.LIGHT },
};

export const LightThemeDark: Story = {
  args: { children: 'text', theme: AppLinkTheme.LIGHT },
};

LightThemeDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark: Story = {
  args: { children: 'text', theme: AppLinkTheme.DARK },
};

export const LinkDarkThemeDark: Story = {
  args: { children: 'text', theme: AppLinkTheme.DARK },
};

LinkDarkThemeDark.decorators = [ThemeDecorator(Theme.DARK)];
