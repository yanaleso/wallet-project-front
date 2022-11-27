export const getBalance = transactions => {
  return transactions[0]?.balanceAfterTransaction;
};
