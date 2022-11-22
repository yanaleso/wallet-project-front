import { createSlice } from '@reduxjs/toolkit';
import { addNewTransaction } from './transactionOperations';

const initialState = {
  isModalAddOpen: false,
  transactions: [],
  isLoading: false,
  error: null,
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

  extraReducers: builder => {
    builder.addCase(addNewTransaction.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(addNewTransaction.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(addNewTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { toggleModalAdd, addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
