import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    navBar: {
      mobile: { isVisible: false, burgerIsClicked: false },
      dropDownIsVisible: false,
    },
  },
  reducers: {
    showNavBarDropdown(state, action) {
      state.navBar.dropDownIsVisible = !state.navBar.dropDownIsVisible;
    },
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
