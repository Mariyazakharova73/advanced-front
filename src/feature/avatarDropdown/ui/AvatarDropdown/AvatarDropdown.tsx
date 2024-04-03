import cn from 'classnames';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Dropdown } from 'shared/ui/Popups';
import s from './AvatarDropdown.module.css';

export interface AvatarDropdownProps {
  className?: string;
}

const AvatarDropdown = ({ className }: AvatarDropdownProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={cn(s.AvatarDropdown, className)}
      direction="bottomLeft"
      trigger={<Avatar size={30} src={authData.avatar} />}
      items={[
        ...(isAdminPanelAvailable
          ? [{ content: t('admin'), href: RoutePath.admin_panel }]
          : []),
        { content: t('profile'), href: RoutePath.profile + authData.id },
        { content: t('logout'), onClick: onLogout },
      ]}
    />
  );
};

export default AvatarDropdown;
