import cn from 'classnames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import s from './LoginForm.module.css';

export interface LoginFormProps {
  className?: string;
}

const LoginForm: FC<LoginFormProps> = props => {
  const { className } = props;
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={cn(s.LoginForm, className)}>
      <Text title={t('title-form')}></Text>
      {error && <Text theme={TextTheme.ERROR} text={error} />}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Input
            onChange={onChangeUsername}
            value={username}
            className={s.input}
            type="text"
            placeholder={t('enter-username')}
          />
          <Input
            value={password}
            onChange={onChangePassword}
            className={s.input}
            type="text"
            placeholder={t('enter-password')}
          />
        </>
      )}
      <Button disabled={isLoading} className={s.loginBtn} onClick={onLoginClick}>
        {t('login')}
      </Button>
    </div>
  );
};

export default memo(LoginForm);
