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
  extraReducers: {
    // [getAllStatistic.pending](state) {
    //   state.isLoading = true;
    // },
    [getAllStatistic.fulfilled](state, action) {
      state.isLoading = false;
      state.transaction = action.payload;
      state.error = null;
    },
    [getAllStatistic.rejected](state, action) {
      console.log(state);
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const statisticReducer = statisticSlice.reducer;
