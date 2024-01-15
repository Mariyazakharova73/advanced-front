import cn from 'classnames';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as AtomIcon } from 'shared/assets/icons/atom.svg';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import s from './Navbar.module.css';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleAuthModal = useCallback(() => {
    setIsAuthModal(prev => !prev);
  }, []);

  const closeAuthModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  return (
    <div className={cn(s.Navbar, className)}>
      <AppLink to="/" theme={AppLinkTheme.DARK}>
        <AtomIcon className={s.icon} />
      </AppLink>
      <div className={s.links}>
        <Button theme={ButtonTheme.OUTLINE_LIGHT} onClick={toggleAuthModal}>
          {t('login')}
        </Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={closeAuthModal}>test</Modal>
    </div>
  );
};

export default Navbar;
