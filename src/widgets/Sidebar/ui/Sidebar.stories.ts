import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from
 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Sidebar from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
