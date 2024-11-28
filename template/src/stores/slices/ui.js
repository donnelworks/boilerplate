import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  toast: [],
  loadingScreenToggle: false,
};

// Slice
const ui = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showToast(state, action) {
      state.toast = [...state.toast, action.payload];
    },
    hideToast(state, action) {
      state.toast = state.toast.filter(curr => curr !== action.payload);
    },
    showLoadingScreen(state) {
      state.loadingScreenToggle = true;
    },
    hideLoadingScreen(state) {
      state.loadingScreenToggle = false;
    },
  },
});

export const {showToast, hideToast, showLoadingScreen, hideLoadingScreen} =
  ui.actions;
export default ui.reducer;
