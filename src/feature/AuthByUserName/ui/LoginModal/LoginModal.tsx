import cn from 'classnames';
import { FC } from 'react';
import { Modal } from 'shared/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';
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
      <LoginForm />
    </Modal>
  );
};

export default LoginModal;
