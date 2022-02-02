import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    navBar: {
      mobile: { isVisible: false, isBurgerClicked: false },
      isDropdownVisible: false,
    },
  },
  reducers: {
    navBarDropDownIsVisible(state, action) {
      state.navBar.isDropdownVisible = action.payload;
    },
    navBarMobileIsVisible(state) {
      state.navBar.mobile.isVisible = !state.navBar.mobile.isVisible;
    },
    navBarBurgerIsClicked(state) {
      state.navBar.mobile.isBurgerClicked =
        !state.navBar.mobile.isBurgerClicked;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
