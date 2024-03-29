import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Profile } from 'entities/Profile';
import { getProfileForm } from '../selectors/getProfileForm';
import { ValidateProfileError } from '../types/profile';
import { validateProfileData } from './validateProfileData';
export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>(
  'profile/updateProfileData',

  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const res = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);
      if (!res.data) {
        throw new Error();
      }
      return res.data;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
