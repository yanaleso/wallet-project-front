import { createSlice } from '@reduxjs/toolkit';
import { getBalance } from 'helpers/formAddTransaction/getBalance';
import { addNewTransaction, getAllTransactions } from './transactionOperations';

const initialState = {
  isModalAddOpen: false,
  totalBalance: 0,
  transactions: [],
  pageNum: 1,
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

    getNextPage: (state, action) => {
      state.pageNum = state.pageNum + 1;
    },

    resetTransactions: (state, action) => {
      state.transactions = [];
      state.pageNum = 1;
    },
  },

  extraReducers: builder => {
    builder.addCase(addNewTransaction.pending, state => {
      state.error = null;
      state.isLoading = true;
    });
    builder.addCase(addNewTransaction.fulfilled, (state, _) => {
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
      state.transactions = [...state.transactions, ...action.payload];

      if (action.payload.length > 0 && state.pageNum === 1) {
        state.totalBalance = getBalance(action.payload);
      }
    });
    builder.addCase(getAllTransactions.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { toggleModalAdd, getNextPage, resetTransactions } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
