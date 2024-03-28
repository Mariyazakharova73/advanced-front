import type { Meta, StoryObj } from '@storybook/react';
import CurrencySelect from './CurrencySelect';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,

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
  args: {},
} as Meta<typeof CurrencySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
