import cn from 'classnames';
import {
  MouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
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

  // for animation when closing a modal
  const [isClosing, setIsClosing] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
    return () => {
      setIsMounted(false);
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

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
        <Overlay onClick={closeHandler} />
        <div className={s.content} role="button" tabIndex={0}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
