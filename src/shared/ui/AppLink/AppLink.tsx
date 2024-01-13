import cn from 'classnames';
import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import s from './AppLink.module.css';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = props => {
  const { to, className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
  return (
    <Link to={to} className={cn(s.AppLink, className, s[theme])} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
