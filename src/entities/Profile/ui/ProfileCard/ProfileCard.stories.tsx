import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency/model/types/currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImg from 'shared/assets/tests/avatar.png';
import ProfileCard from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'react',
      first: 'name',
      city: 'Moscow',
      currency: Currency.EUR,
      avatar: AvatarImg,
    },
  },
};

Primary.decorators = [ThemeDecorator(Theme.LIGHT)];

export const PrimaryDark: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'react',
      first: 'name',
      city: 'Moscow',
      currency: Currency.EUR,
      avatar: AvatarImg,
    },
  },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const IsLoadingDark: Story = {
  args: {
    isLoading: true,
  },
};

IsLoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError: Story = {
  args: {
    error: 'true',
  },
};

export const WithErrorDark: Story = {
  args: {
    error: 'true',
  },
};

WithErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
