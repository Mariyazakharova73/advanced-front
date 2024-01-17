import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } 
from '../../../../shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Modal from './Modal';

const meta = {
  title: 'widget/Modal',
  component: Modal,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolorsit amet consectetur'
  },
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolorsit amet consectetur',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
