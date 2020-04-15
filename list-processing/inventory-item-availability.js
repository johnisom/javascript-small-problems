// Exercise 10

const transactionsFor = function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
};

const isItemAvailable = function isItemAvailable(item, transactions) {
  const filteredTransactions = transactionsFor(item, transactions);
  const count = filteredTransactions.reduce((stock, transaction) => {
    if (transaction.movement === 'in') return stock + transaction.quantity;
    return stock - transaction.quantity;
  }, 0);

  return count > 0;
};
