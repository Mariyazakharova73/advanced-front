import cn from 'classnames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import s from './LoginForm.module.css';

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = props => {
  const { className } = props;
  const { t } = useTranslation();
  const [x, setX] = useState('');
  const onChange = (val: string) => {
    setX(val);
  };
  return (
    <div className={cn(s.LoginForm, className)}>
      <Input
        onChange={onChange}
        value={x}
        className={s.input}
        type="text"
        placeholder={t('enter-username')}
      />
      <Input className={s.input} type="text" placeholder={t('enter-password')} />
      <Button className={s.loginBtn}>{t('login')}</Button>
    </div>
  );
};

export default LoginForm;
