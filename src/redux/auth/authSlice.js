import { createSlice } from '@reduxjs/toolkit';
import {
  userRegistration,
  userLogin,
  userLogout,
  refreshUser,
} from './authOperation';

const initialState = {
  user: { name: null, email: null },
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
      state.user = { name: null, email: null };
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
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.refreshLoading = false;
    });
    builder.addCase(refreshUser.pending, state => {
      state.refreshLoading = true;
    });
  },
});

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     [userRegistration.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.error = null;
//     },
//     [userRegistration.rejected](state, action) {
//       state.error = action.payload;
//     },
//     [userLogin.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.error = null;
//     },
//     [userLogin.rejected](state, action) {
//       state.error = action.payload;
//     },
//     [userLogout.fulfilled](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//     },
//     [userLogout.rejected](state, action) {
//       state.error = action.payload;
//     },
//     [refreshUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.refreshLoading = false;
//     },
//     [refreshUser.rejected](state) {
//       state.user = { name: null, email: null };
//       state.token = null;
//       state.isLoggedIn = false;
//       state.refreshLoading = false;
//     },
//     [refreshUser.pending](state) {
//       state.refreshLoading = true;
//     },
//   },
// });

export default authSlice.reducer;
