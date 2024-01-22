import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/avatar.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
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
  }),
  ThemeDecorator(Theme.LIGHT),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({
    profile: {
      form: {
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
  }),
  ThemeDecorator(Theme.DARK),
];
