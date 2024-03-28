import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { profileData } from 'shared/const/testData';
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

Light.decorators = [StoreDecorator(profileData), ThemeDecorator(Theme.LIGHT)];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [StoreDecorator(profileData), ThemeDecorator(Theme.DARK)];
