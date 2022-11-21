import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-project.onrender.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common['Authorization'] = ``;
  },
};

export const userRegistration = createAsyncThunk(
  'users/signup',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('Registration has failed');
    }
  }
);

export const userLogin = createAsyncThunk(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', userData);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('login has failed');
    }
  }
);

export const userLogout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/signup');
      token.unset();
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('logout has failed');
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, { getState, RejectWithValue }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      RejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios('/users/refresh');
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
