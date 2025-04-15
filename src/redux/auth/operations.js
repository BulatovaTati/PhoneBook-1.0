import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://nodejs-hw-nq50.onrender.com';
axios.defaults.withCredentials = true;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', credentials, { withCredentials: true });
    setAuthHeader(data.data.accessToken);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await axios.post('/auth/logout', null, { withCredentials: true });
    clearAuthHeader();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.post('/auth/refresh', null, {
      withCredentials: true,
    });

    const { accessToken, name } = response.data.data;

    setAuthHeader(accessToken);

    return { accessToken, name };
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const requestResetEmail = createAsyncThunk(
  'auth/requestResetEmail',
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/send-reset-email', { email });
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ token, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('auth/reset-pwd', { token, password });
      return data.message;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  refreshUser,
  requestResetEmail,
  resetPassword,
};

export default operations;
