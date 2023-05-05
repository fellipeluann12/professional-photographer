import { createSlice } from '@reduxjs/toolkit';

const albumSlice = createSlice({
  name: 'album',
  initialState: [],
  reducers: {
    setAlbum(state, action) {
      return action.payload || [];
    },
  },
});

export const albumActions = albumSlice.actions;
export default albumSlice;
