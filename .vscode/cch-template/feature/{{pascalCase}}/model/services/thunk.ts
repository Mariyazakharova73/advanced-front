import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface TemplateProps {
 
}

export const Template = createAsyncThunk<
  // User,
  // LoginByUsernameProps,
  ThunkConfig<string>
>(
  'template/template',

  async (authData: TemplateProps, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const res = await extra.api.post<User>('/login', authData);
      if (!res.data) {
        throw new Error();
      }

      return res.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue('Ошибка');
    }
  },
);
