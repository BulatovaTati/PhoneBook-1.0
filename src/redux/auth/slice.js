import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, confirmGoogleLogin } from './operations';
import customToast from '../../components/Toast/Toast';

const ERROR_TEXT = 'Oops... something went wrong, try again!';

const initialState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, state => {
        customToast('success', 'Successful registration, please Log In');
      })
      .addCase(register.rejected, state => {
        customToast('error', ERROR_TEXT);
        return state;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.data.name;
        state.accessToken = payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, state => {
        customToast('error', ERROR_TEXT);
        return state;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = null;
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        customToast('error', ERROR_TEXT);
        return state;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload.name;
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
        state.user = null;
        state.accessToken = null;
        state.isLoggedIn = false;
      })
      .addCase(confirmGoogleLogin.pending, state => {
        state.error = null;
      })
      .addCase(confirmGoogleLogin.fulfilled, (state, { payload }) => {
        state.user = payload.name;
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(confirmGoogleLogin.rejected, (state, action) => {
        state.error = action.payload;
        customToast('error', ERROR_TEXT);
      }),
});

export const authReducer = authSlice.reducer;
