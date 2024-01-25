import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import CommentCard from './CommentCard';

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Mary' },
    },
  },
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Loading: Story = {
  args: {
    comment: {
      id: '1',
      text: 'hello world',
      user: { id: '1', username: 'Mary' },
    },
    isLoading: true,
  },
};

Loading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
