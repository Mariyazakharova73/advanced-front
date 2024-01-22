import { ReactComponent as AboutIcon } from 'shared/assets/icons/about.svg';
import { ReactComponent as HomeIcon } from 'shared/assets/icons/home.svg';
import { ReactComponent as ProfileIcon } from 'shared/assets/icons/profile.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  path: string;
  text: string;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
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
  {
    Icon: ProfileIcon,
    path: RoutePath.profile,
    text: 'profile',
    authOnly: true,
  },
];
