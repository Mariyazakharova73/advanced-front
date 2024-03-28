import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import EditableProfileCard from './EditableProfileCard';

const meta = {
  title: 'feature/EditableProfileCard',
  component: EditableProfileCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

Light.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
