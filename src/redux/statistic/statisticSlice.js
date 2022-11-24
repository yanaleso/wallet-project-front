import { createSlice } from '@reduxjs/toolkit';
import { getAllStatistic } from './statisticOperation';

const initialState = {
  transaction: [],
  isLoading: false,
  error: null,
};

const statisticSlice = createSlice({
  name: 'statistic',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllStatistic.fulfilled, (state, action) => {
      state.isLoading = false;
      state.transaction = action.payload;
      state.error = null;
    });
    builder.addCase(getAllStatistic.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export default statisticSlice.reducer;
