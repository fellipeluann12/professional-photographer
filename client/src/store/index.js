import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import albumsSlice from './gallery/albums-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, albums: albumsSlice.reducer },
});

export default store;
