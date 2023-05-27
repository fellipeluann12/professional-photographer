import { createSlice } from '@reduxjs/toolkit';

const albumSlice = createSlice({
  name: 'album',
  initialState: { albums: [], photos: [] },
  reducers: {
    setAlbums(state, action) {
      state.albums = action.payload ?? [];
    },
    setPhotos(state, action) {
      state.photos = action.payload ?? [];
    },
  },
});

export const albumActions = albumSlice.actions;
export default albumSlice;
