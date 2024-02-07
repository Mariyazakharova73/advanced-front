import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { userActions, type User } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>(
  'login/loginByUsername',

  async (authData: LoginByUsernameProps, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await extra.api.post<User>('/login', authData);
      if (!res.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));

      dispatch(userActions.setAuthData(res.data));
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // extra?.navigate(AppRoutes.ABOUT);

      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Неверный логин или пароль');
    }
  },
);
