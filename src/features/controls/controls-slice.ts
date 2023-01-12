import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Region } from 'types/regions';

type ControlSlice = {
  search: string;
  region: Region | '';
};

const initialState: ControlSlice = {
  search: '',
  region: '',
};

const controlsSlice = createSlice({
  name: '@@controls',
  initialState: initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setRegion: (state, action: PayloadAction<Region | ''>) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setSearch, setRegion, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
