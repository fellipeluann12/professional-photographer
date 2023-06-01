import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    navBar: {
      mobile: { isVisible: false, burgerIsClicked: false },
    },
  },
  reducers: {
    showNavBarMobile(state) {
      state.navBar.mobile.isVisible = !state.navBar.mobile.isVisible;
    },
    toggleBurger(state) {
      state.navBar.mobile.burgerIsClicked =
        !state.navBar.mobile.burgerIsClicked;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
