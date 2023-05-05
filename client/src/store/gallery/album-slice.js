import { createSlice } from '@reduxjs/toolkit';

const albumSlice = createSlice({
  name: 'albums',
  initialState: {
    items: [
      {
        id: 1,
        name: 'Naya Rivera',
        formattedName: 'naya-rivera',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        cover: '',
        date: '23/03/2023',
        photos: [{ id: 1, img: '' }],
      },
      {
        id: 2,
        name: 'Naya Rivera',
        formattedName: 'naya-rivera',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
        cover: '',
        date: '23/03/2023',
        photos: [{ id: 1, img: '' }],
      },
    ],
  },
  reducers: {
    setAlbums(state, action) {
      state.album = action.payload.albums || [];
    },
  },
});

export const albumActions = albumSlice.actions;

export default albumSlice;
