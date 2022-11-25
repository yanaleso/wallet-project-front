import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-project.onrender.com/api';

export const addNewTransaction = createAsyncThunk(
  'transaction/ADD',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/transactions`, transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transaction/GET_ALL',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
