/* eslint-disable max-len */
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  ArticleBlockType,
  ArticleType,
  type Article,
} from '../../../Article/model/types/article';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleDetails from './ArticleDetails';
import { article } from 'shared/const/testData';

const meta = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ articleDetails: { data: article } }),
];

export const Loading: Story = {
  args: {},
};

Loading.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ articleDetails: { isLoading: true } }),
];

export const Error: Story = {
  args: {},
};

Error.decorators = [
  ThemeDecorator(Theme.LIGHT),
  StoreDecorator({ articleDetails: { error: 'error' } }),
];
