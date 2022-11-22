import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-project.onrender.com/api';

export const getAllStatistic = createAsyncThunk(
  'transaction/statistic',
  async (userID, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('./transaction/statistics');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue('Error');
    }
  }
);
