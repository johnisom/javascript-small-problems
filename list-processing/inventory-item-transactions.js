// Exercise 9

const transactionsFor = function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(({id}) => id === inventoryItem);
};
