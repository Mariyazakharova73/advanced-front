import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import axios from 'axios';
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
      const res = await axios.post<User>('http://localhost:8000/login', authData);
      if (!res.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));

      thunkAPI.dispatch(userActions.setAuthData(res.data));

      return res.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('Неверный логин или пароль');
    }
  },
);
