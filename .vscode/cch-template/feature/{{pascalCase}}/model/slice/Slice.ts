import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: Schema = {
  // isLoading: false,
};

export const Slice = createSlice({
  name: '',
  initialState,
  reducers: {
    setx: (state, action: PayloadAction<string>) => {
      state.x= action.payload;
    },
  },

  // extraReducers: builder => {
  //   builder
  //     .addCase(loginByUsername.pending, state => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })

  //     .addCase(loginByUsername.fulfilled, state => {
  //       state.isLoading = false;
  //     })

  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.error = action.payload;
  //       state.isLoading = false;
  //     });
  // },
});

export const { actions: Actions } = Slice;
export const { reducer: Reducer } = Slice;
