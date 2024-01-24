import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import CommentList from './CommentList';

const meta = {
  title: 'entities/CommentList',
  component: CommentList,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Mary' },
      },
      {
        id: '1',
        text: 'comment 2',
        user: { id: '2', username: 'Pavel' },
      },
    ],
  },
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};

Loading.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
