import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import HDropdown from './HDropdown';
const meta = {
  title: 'shared/HDropdown',
  component: HDropdown,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof HDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
  args: {},
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
