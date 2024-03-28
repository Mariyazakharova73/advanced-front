import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleList from './ArticleList';
import { article } from 'shared/const/testData';

const meta = {
  title: 'entities/ArticleList',
  component: ArticleList,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    articles: [
      { ...article, id: '1' },
      { ...article, id: '2' },
      { ...article, id: '3' },
    ],
  },
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

