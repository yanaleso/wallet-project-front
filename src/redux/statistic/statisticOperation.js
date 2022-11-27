import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-project.onrender.com/api';

export const getStatistic = createAsyncThunk(
  'transactions/statistics',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/transactions/statistics');

      return res.data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
