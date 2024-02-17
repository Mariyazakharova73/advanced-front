import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator';
import Text, { TextSize, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Title',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'Title',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PrimapyError: Story = {
  args: {
    title: 'Title',
    text: 'Title',
    theme: TextTheme.ERROR,
  },
};

export const PrimaryErrorDark: Story = {
  args: {
    title: 'Title',
    text: 'Title',
    theme: TextTheme.ERROR,
  },
};
PrimaryErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText: Story = {
  args: {
    text: 'Text',
  },
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Text',
  },
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'Title',
    size: TextSize.L,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title',
    text: 'Title',
    size: TextSize.M,
  },
};

export const SizeS: Story = {
  args: {
    title: 'Title',
    text: 'Title',
    size: TextSize.S,
  },
};
