import { Portal } from '@headlessui/react';
import { useTheme } from 'app/providers/ThemeProvider';
import cn from 'classnames';
import { ReactNode, memo } from 'react';
import s from './Drawer.module.css';
import Overlay from '../Overlay/Overlay';

export interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Drawer = (props: DrawerProps) => {
  const { className, children, isOpen, onClose } = props;
  const { theme } = useTheme();

  return (
    <Portal>
      <div className={cn(s.Drawer, className, theme, { [s.opened]: isOpen })}>
        <Overlay onClick={onClose} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  );
};

export default memo(Drawer);
