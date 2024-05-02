import { Portal } from '@headlessui/react';
import { useTheme } from 'app/providers/ThemeProvider';
import cn from 'classnames';
import { ReactNode, memo } from 'react';
import { useModal } from 'shared/lib/hooks/useModal';
import Overlay from '../Overlay/Overlay';
import s from './Drawer.module.css';

export interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const Drawer = (props: DrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { theme } = useTheme();

  const { isClosing, isMounted, close } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  });

  const mods = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(s.Drawer, className, theme, mods)}>
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};

export default memo(Drawer);
