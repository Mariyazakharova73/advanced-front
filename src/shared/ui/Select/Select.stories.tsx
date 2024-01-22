import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Select',
  component: Select,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {},
} as Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Селект',
    options: [
      { value: '1', content: 'Первый пункт' },
      { value: '2', content: 'Второй пункт' },
      { value: '3', content: 'Третий пункт' },
    ],
  },
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
  args: {
    label: 'Селект',
    options: [
      { value: '1', content: 'Первый пункт' },
      { value: '2', content: 'Второй пункт' },
      { value: '3', content: 'Третий пункт' },
    ],
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
