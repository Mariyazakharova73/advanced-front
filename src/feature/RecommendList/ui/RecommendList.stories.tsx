import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { article } from 'shared/const/testData';
import RecommendList from './RecommendList';

const meta = {
  title: 'feature/RecommendList',
  component: RecommendList,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    mockData: [
      {
        url: 'http://localhost:8000/articles?_limit=3',
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' },
        ],
      },
    ],
  },
} as Meta<typeof RecommendList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
