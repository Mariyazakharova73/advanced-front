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
      'Lorem ipsum dolorsit amet consectetur adipisicing elit. Consequuntur, aspernatur numquam amet non deleniti, atque sapiente ab nesciunt soluta aut eaque optio ut dolorum labore distinctio eum corrupti hic nihil',
  },
};

Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolorsit amet consectetur adipisicing elit. Consequuntur, aspernatur numquam amet non deleniti, atque sapiente ab nesciunt soluta aut eaque optio ut dolorum labore distinctio eum corrupti hic nihil',
  },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
