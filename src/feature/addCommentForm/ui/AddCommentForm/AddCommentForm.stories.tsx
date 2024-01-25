import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'feature/AddCommentsForm',
  component: AddCommentForm,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({})];
