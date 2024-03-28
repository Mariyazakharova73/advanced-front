import type { Meta, StoryObj } from '@storybook/react';
import CountrySelect from './CountrySelect';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,

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
} as Meta<typeof CountrySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
