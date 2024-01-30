import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

export const ScrollSaveSlice = createSlice({
  name: 'ScrollSaveSlice',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>,
    ) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
  extraReducers: builder => {
    // builder
    //   .addCase(fetchProfileData.pending, (state, action) => {
    //     state.error = undefined
    //     state.isLoading = true
    //   })
    //   .addCase(
    //     fetchProfileData.fulfilled,
    //     (state, action: PayloadAction<Profile>) => {
    //       state.isLoading = false
    //       state.error = undefined
    //     }
    //   )
    //   .addCase(fetchProfileData.rejected, (state, action) => {
    //     state.error = action.payload
    //     state.isLoading = false
    //   })
  },
});

export const { actions: scrollSaveActions, reducer: scrollSaveReducer } = ScrollSaveSlice;
