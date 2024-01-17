import cn from 'classnames';
import { FC, Suspense } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal';
import { LoginFormLazy } from '../LoginForm/LoginForm.async';
import s from './LoginModal.module.css';

export interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: FC<LoginModalProps> = props => {
  const { className, isOpen, onClose } = props;
  return (
    <Modal className={cn(s.LoginModal, className)} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormLazy onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

export default LoginModal;
