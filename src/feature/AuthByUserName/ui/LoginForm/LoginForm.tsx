import cn from 'classnames';
import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { getLoginError } from '../../model/selectors/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading';
import { getLoginPassword } from '../../model/selectors/getLoginPassword';
import { getLoginUsername } from '../../model/selectors/getLoginUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import s from './LoginForm.module.css';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

// редюсеры, которые нужно добавлять асинхронно
// вынесли из комп, чтобы не создавалась новая ссылка при каждом рендере
const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm: FC<LoginFormProps> = props => {
  const { className, onSuccess } = props;

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const dispatch = useAppDispatch();
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

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
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
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);
