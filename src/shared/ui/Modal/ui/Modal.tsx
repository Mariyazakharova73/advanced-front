import cn from 'classnames';
import {
  MouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import Portal from 'shared/ui/Portal/Portal';
import s from './Modal.module.css';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const Modal: FC<ModalProps> = props => {
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

  const onContentClick = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const mods: Record<string, boolean> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  };

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={cn(s.Modal, className, mods)}>
        <div
          className={s.overlay}
          onClick={closeHandler}
          role="button"
          tabIndex={0}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onKeyDown={onKeyDown}
        >
          <div
            className={s.content}
            role="button"
            tabIndex={0}
            onClick={onContentClick}
            onKeyDown={() => console.log('test')}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
