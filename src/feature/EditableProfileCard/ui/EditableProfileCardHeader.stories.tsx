import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import EditableProfileCardHeader from './EditableProfileCardHeader';

const meta = {
  title: 'feature/EditableProfileCardHeader',
  component: EditableProfileCardHeader,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof EditableProfileCardHeader>;

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
