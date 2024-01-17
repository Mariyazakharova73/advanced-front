import cn from 'classnames';
import { getUserAuthData, userActions } from 'entities/User';
import { LoginModal } from 'feature/AuthByUserName';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReactComponent as AtomIcon } from 'shared/assets/icons/atom.svg';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import s from './Navbar.module.css';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

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
    <div className={cn(s.Navbar, className)}>
      <AppLink to="/" theme={AppLinkTheme.DARK}>
        <AtomIcon className={s.icon} />
      </AppLink>
      <div className={s.links}>
        {authData ? (
          <Button theme={ButtonTheme.OUTLINE_LIGHT} onClick={onLogout}>
            {t('logout')}
          </Button>
        ) : (
          <Button theme={ButtonTheme.OUTLINE_LIGHT} onClick={openAuthModal}>
            {t('login')}
          </Button>
        )}
      </div>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={closeAuthModal} />}
    </div>
  );
};

export default Navbar;
