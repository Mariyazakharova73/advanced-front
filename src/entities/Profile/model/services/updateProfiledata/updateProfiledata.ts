import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getProfileForm } from '../../selectors/getProfileForm';
import { Profile } from '../../types/profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',

  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    try {
      const res = await extra.api.put<Profile>('/profile/1', formData);

      if (!res.data) {
        throw new Error();
      }
      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
