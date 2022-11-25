export const getBalance = transactions => {
  const lastTransaction = transactions.length - 1;
  const balance = transactions[lastTransaction]?.balanceAfterTransaction;

  return balance || 0;
};
