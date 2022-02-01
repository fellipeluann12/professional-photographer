import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { navBar: { dropDownIsVisible: false } },
  reducers: {
    NavBarDropDownIsVisible(state, action) {
      state.navBar.dropDownIsVisible = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
