import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogin,
  userLogout,
  refreshUser,
} from './authOperation';

const initialState = {
  user: { firstName: null, email: null, balance: 0 },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(userLogout.fulfilled, state => {
      state.user = { name: null, email: null, balance: 0 };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.refreshLoading = false;
    });
    builder.addCase(refreshUser.rejected, state => {
      state.user = { name: null, email: null, balance: 0 };
      state.token = null;
      state.isLoggedIn = false;
      state.refreshLoading = false;
    });
    builder.addCase(refreshUser.pending, state => {
      state.refreshLoading = true;
    });
  },
});

export default authSlice.reducer;
