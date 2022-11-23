import { createSlice } from '@reduxjs/toolkit';
import { addNewTransaction, getAllTransactions } from './transactionOperations';

const initialState = {
  isModalAddOpen: false,
  totalBalance: 0,
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
  },

  extraReducers: builder => {
    builder.addCase(addNewTransaction.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(addNewTransaction.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addNewTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });

    builder.addCase(getAllTransactions.pending, (state, _) => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(getAllTransactions.fulfilled, (state, action) => {
      state.isLoading = false;
      state.transactions = action.payload;
    });
    builder.addCase(getAllTransactions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { toggleModalAdd } = transactionsSlice.actions;

export default transactionsSlice.reducer;
