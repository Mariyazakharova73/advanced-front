import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { ReactComponent as AboutIcon } from 'shared/assets/icons/about.svg';
import { ReactComponent as ArticlesIcon } from 'shared/assets/icons/articles.svg';
import { ReactComponent as HomeIcon } from 'shared/assets/icons/home.svg';
import { ReactComponent as ProfileIcon } from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, userData => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      Icon: HomeIcon,
      path: RoutePath.main,
      text: 'main',
    },

    {
      Icon: AboutIcon,
      path: RoutePath.about,
      text: 'about',
    },
  ];
  if (userData) {
    sidebarItemsList.push(
      {
        Icon: ProfileIcon,
        path: RoutePath.profile + userData?.id,
        text: 'profile',
        authOnly: true,
      },
      {
        Icon: ArticlesIcon,
        path: RoutePath.articles,
        text: 'articles',
        authOnly: true,
      },
    );
  }
  return sidebarItemsList;
});
