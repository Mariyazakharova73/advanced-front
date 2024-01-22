import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Avatar from './Avatar';
import AvatrImg from '../../assets/tests/avatar.png';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatrImg,
  },
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
  args: { size: 150, src: AvatrImg },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Small: Story = {
  args: {
    size: 50,
    src: AvatrImg,
  },
};

Small.decorators = [ThemeDecorator(Theme.LIGHT)];

export const SmallDark: Story = {
  args: { size: 50, src: AvatrImg },
};

SmallDark.decorators = [ThemeDecorator(Theme.DARK)];
