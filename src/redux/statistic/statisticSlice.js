import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statisticOperation';

const initialState = {
  statistic: { _id: '', totalSum: null, type: '' },
  isLoading: false,
  error: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: builder => {
    builder.addCase(getStatistic.fulfilled, (state, action) => {
      state.isLoading = false;
      state.transaction = action.payload;
      state.error = null;
    });
    builder.addCase(getStatistic.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const statisticReducer = statisticSlice.reducer;
