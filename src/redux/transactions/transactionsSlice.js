import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddOpen: false,
  transactions: [],
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    toggleModalAdd: (state, action) => {
      state.isModalAddOpen = action.payload;
    },

    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    
  },
});

export const { toggleModalAdd, addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;