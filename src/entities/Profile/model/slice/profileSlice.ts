import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfiledata/updateProfiledata';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = state.form = {
        ...state.form,
        ...action.payload,
      };
    },
    cancelEdit: state => {
      state.readonly = true;
      state.form = state.data;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload;
        state.form = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
    // updateProfileData
    builder
      .addCase(updateProfileData.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.data = action.payload;
        state.form = action.payload;
        state.isLoading = false;
      })

      .addCase(updateProfileData.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
