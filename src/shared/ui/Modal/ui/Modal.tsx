import cn from 'classnames';
import { PropsWithChildren } from 'react';
import { useModal } from 'shared/lib/hooks/useModal';
import Portal from '../../../ui/Portal/Portal';
import Overlay from '../../Overlay/Overlay';
import s from './Modal.module.css';

export interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { className, children, isOpen, lazy, onClose } = props;

  const { isClosing, isMounted, close } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(s.Modal, className, mods)}>
        <Overlay onClick={close} />
        <div className={s.content} role="button" tabIndex={0}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
