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
});

export const { actions: scrollSaveActions, reducer: scrollSaveReducer } = ScrollSaveSlice;
