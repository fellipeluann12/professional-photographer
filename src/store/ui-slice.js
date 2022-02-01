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
    NavBarDropDownIsVisible(state, action) {
      state.navBar.isDropdownVisible = action.payload;
    },
    NavBarMobileIsVisible(state) {
      state.navBar.mobile.isVisible = !state.navBar.mobile.isVisible;
    },
    NavBarBurgerIsClicked(state) {
      state.navBar.mobile.isBurgerClicked =
        !state.navBar.mobile.isBurgerClicked;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
