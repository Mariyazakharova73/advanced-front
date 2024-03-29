import { getUserAuthData } from 'entities/User';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import { SidebarItemType } from '../../model/types/sidebar';
import s from './SidebarItem.module.css';

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
    <AppLink
      className={s.link}
      key={item.path}
      theme={AppLinkTheme.MENUITEM}
      to={item.path}
    >
      <GridStack gap="16">
        <item.Icon className={s.icon} />
        {collapsed ? null : <span className={s.text}>{t(item.text)}</span>}
      </GridStack>
    </AppLink>
  );
};

export default memo(SidebarItem);
