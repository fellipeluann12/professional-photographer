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
      return {
        ...state,
        albums: state.albums.filter((album) => album.id !== albumId),
      };
    },
    deletePhoto(state, action) {
      const photoId = action.payload;
      return {
        ...state,
        photos: state.photos.filter((photo) => photo.id !== photoId),
      };
    },
    updateAlbum(state, action) {
      const updatedAlbum = action.payload.data;
      console.log('updatealbum Slice:?', updatedAlbum);
      return {
        ...state,
        albums: state.albums.map((album) => {
          if (album.id === updatedAlbum.id) {
            return {
              ...album,
              ...updatedAlbum,
              coverImg: updatedAlbum.coverImg,
            };
          } else {
            return album;
          }
        }),
      };
    },
  },
});

export const albumActions = albumSlice.actions;
export default albumSlice;
