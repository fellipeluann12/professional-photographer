import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './ui-slice';
import albumSlice from './album/album-slice';
import projectSlice from './project/project-slice';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    project: projectSlice.reducer,
    album: albumSlice.reducer,
  },
});

export default store;
