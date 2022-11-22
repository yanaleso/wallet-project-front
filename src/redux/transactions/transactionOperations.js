import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://wallet-project.onrender.com/api';

export const addNewTransaction = createAsyncThunk(
  'transaction/ADD',
  async (transaction, { rejectWithValue }) => {
    console.log('transaction', transaction);

    try {
      const { data } = await axios.post(`/transactions`, transaction);
      console.log('data', data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
