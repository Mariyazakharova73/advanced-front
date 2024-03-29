import cn from 'classnames';
import { PropsWithChildren, memo } from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';
import s from './AppLink.module.css';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  LIGHT = 'light',
  DARK = 'dark',
  MENUITEM = 'menuItem',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink = (props: PropsWithChildren<AppLinkProps>) => {
  const { to, className, children, theme = AppLinkTheme.LIGHT, ...otherProps } = props;

  const { pathname } = useLocation();

  const mods = {
    [theme === AppLinkTheme.MENUITEM ? s.menuItemActive : s.linkActive]: to === pathname,
  };

  return (
    <Link to={to} className={cn(s.AppLink, className, s[theme], mods)} {...otherProps}>
      {children}
    </Link>
  );
};

export default memo(AppLink);
