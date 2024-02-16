import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Flex from './Flex';

const meta = {
  title: 'shared/Flex',
  component: Flex,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

const content = (
  <>
    <div>ghijhjkf</div>
    <div>ghijhjkf</div>
    <div>ghijhjkf</div>
    <div>ghijhjkf</div>
  </>
);

export const Row: Story = {
  args: {
    children: content,
  },
};

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: content,
  },
};

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: content,
  },
};

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: content,
  },
};

export const RowGap32: Story = {
  args: {
    gap: '32',
    children: content,
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: content,
  },
};

export const ColumnGap4: Story = {
  args: {
    direction: 'column',
    gap: '4',
    children: content,
  },
};

export const ColumnGap8: Story = {
  args: {
    direction: 'column',
    gap: '8',
    children: content,
  },
};

export const ColumnGap16: Story = {
  args: {
    direction: 'column',
    gap: '16',
    children: content,
  },
};

export const ColumnGap32: Story = {
  args: {
    direction: 'column',
    gap: '32',
    children: content,
  },
};

Row.decorators = [ThemeDecorator(Theme.DARK)];
Column.decorators = [ThemeDecorator(Theme.DARK)];
ColumnGap4.decorators = [ThemeDecorator(Theme.DARK)];
ColumnGap8.decorators = [ThemeDecorator(Theme.DARK)];
ColumnGap16.decorators = [ThemeDecorator(Theme.DARK)];
ColumnGap32.decorators = [ThemeDecorator(Theme.DARK)];
RowGap4.decorators = [ThemeDecorator(Theme.DARK)];
RowGap8.decorators = [ThemeDecorator(Theme.DARK)];
RowGap16.decorators = [ThemeDecorator(Theme.DARK)];
RowGap32.decorators = [ThemeDecorator(Theme.DARK)];
