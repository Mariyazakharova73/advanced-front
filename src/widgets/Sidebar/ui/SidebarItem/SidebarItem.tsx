import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import s from './SidebarItem.module.css';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props;
  const isAuth = useSelector(getUserAuthData);

  const { t } = useTranslation();

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={s.link} key={item.path} theme={AppLinkTheme.LIGHT} to={item.path}>
      <item.Icon className={s.icon} />
      {collapsed ? null : <span className={s.text}>{t(item.text)}</span>}
    </AppLink>
  );
};

export default memo(SidebarItem);
