import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { requestTest } from '@services/auth';

const initialState = {
  token: null,
  validationMessage: ""
};

// Slice
const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateToken(state, action) {
      state.token = action.payload;
    },
    logout(state) {
      state.token = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(requestTest.pending, state => {
      console.log('Loading');

      state.validationMessage = "";
    });
    builder.addCase(requestTest.fulfilled, (state, action) => {
      const res = action.payload;
      console.log(res);

      state.token = res.data.token;
    });
    builder.addCase(requestTest.rejected, (state, action) => {
      const res = action.payload;
      console.log(res);
      
      if (res.statusMessage === "FORM_VALIDATION_ERROR") {
        state.validationMessage = res.data.username;
      }
      if (res.statusMessage === "AUTH_ERROR") {
        state.validationMessage = res.data;
      }
    });
  },
});

export const {updateToken, logout} = auth.actions;
export default auth.reducer;
