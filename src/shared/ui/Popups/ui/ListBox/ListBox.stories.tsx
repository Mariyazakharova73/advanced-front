import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { ListBox } from './ListBox';
const meta = {
  title: 'shared/HListBox',
  component: ListBox,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    Story => (
      <div style={{ padding: '100px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  { content: 'first111111', value: '123' },
  { content: 'second111111', value: '123' },
  { content: 'third1111111', value: '123' },
];

export const Normal: Story = {
  args: { items: options },
};

Normal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const NormalDark: Story = {
  args: { items: options, value: '1234' },
};

NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const topLeft: Story = {
  args: { items: options, direction: 'topLeft', value: '1234' },
};

export const topRight: Story = {
  args: { items: options, direction: 'topRight', value: '1234' },
};

export const bottomRight: Story = {
  args: { items: options, direction: 'bottomRight', value: '1234' },
};

export const bottomLeft: Story = {
  args: { items: options, direction: 'bottomLeft', value: '1234' },
};
