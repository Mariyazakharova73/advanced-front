import cn from 'classnames';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entities/User';
import { LoginModal } from 'feature/AuthByUserName';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReactComponent as AtomIcon } from 'shared/assets/icons/atom.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import HDropdown from 'shared/ui/HDropdown/HDropdown';
import s from './Navbar.module.css';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const isAdminPanelAvailable = isAdmin || isManager;

  const [isAuthModal, setIsAuthModal] = useState(false);

  const openAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <header className={cn(s.Navbar, className)}>
      <AppLink to={RoutePath.main} theme={AppLinkTheme.DARK}>
        <AtomIcon className={s.icon} />
      </AppLink>

      <div className={s.links}>
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.LIGHT}>
          {t('createArticle')}
        </AppLink>
        {authData ? (
          <HDropdown
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
        ) : (
          <Button theme={ButtonTheme.OUTLINE_LIGHT} onClick={openAuthModal}>
            {t('login')}
          </Button>
        )}
      </div>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={closeAuthModal} />}
    </header>
  );
};

export default memo(Navbar);
