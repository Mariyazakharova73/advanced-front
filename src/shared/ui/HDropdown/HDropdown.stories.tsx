import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Button from '../Button/Button';
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

export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [{ content: 'first' }, { content: 'second' }, { content: 'third' }],
  },
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NormalDark: Story = {
  args: {},
};

NormalDark.decorators = [ThemeDecorator(Theme.DARK)];
