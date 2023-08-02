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
    deleteAlbum(state, action) {
      const albumId = action.payload;
      console.log(state);
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== albumId),
      };
    },
  },
});

export const albumActions = albumSlice.actions;
export default albumSlice;
