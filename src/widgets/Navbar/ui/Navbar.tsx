import cn from 'classnames';
import { getUserAuthData } from 'entities/User';
import { LoginModal } from 'feature/AuthByUserName';
import { AvatarDropdown } from 'feature/avatarDropdown';
import { NotificationButton } from 'feature/notificationButton';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReactComponent as AtomIcon } from 'shared/assets/icons/atom.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { HStack } from 'shared/ui/Stack';
import s from './Navbar.module.css';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const [isAuthModal, setIsAuthModal] = useState(false);

  const openAuthModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <header className={cn(s.Navbar, className)}>
      <AppLink to={RoutePath.main} theme={AppLinkTheme.DARK}>
        <AtomIcon />
      </AppLink>

      <div className={s.links}>
        <AppLink to={RoutePath.article_create}>{t('createArticle')}</AppLink>
        {authData ? (
          <HStack gap="16">
            <NotificationButton />
            <AvatarDropdown />
          </HStack>
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
