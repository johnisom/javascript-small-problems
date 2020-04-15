// Exercise 9

/*

On line 64 we reassign shoppingCart to be an object rather than an array.

Oops. My refactoring actually fixed the bug accidentally. Woot!

*/

// The shopping cart is a list of items, where each item is an object
// { name: <string>, amount: <number> }.
let shoppingCart = [];

// Currently available products with prices.
const prices = {
  notebook: 9.99,
  pencil: 1.70,
  coffee: 3.00,
  smoothie: 2.10,
};

const price = function price(item) {
  return prices[item.name];
};

// Adding an item to the shopping cart.
// The amount is optional and defaults to 1.
// If the item is already in the cart, its amount is updated.
const updateCart = function updateCart(name, amount = 1) {
  let alreadyInCart = false;

  for (let i = 0; i < shoppingCart.length; i += 1) {
    const item = shoppingCart[i];

    if (item.name === name) {
      item.amount = amount;
      alreadyInCart = true;
      break;
    }
  }

  if (!alreadyInCart) {
    shoppingCart.push({ name: name, amount: amount });
  }
};

// Calculating the price for the whole shopping cart.
const total = function total() {
  return shoppingCart
    .reduce((total, item) => total + item.amount * price(item), 0)
    .toFixed(2);
};

const pay = function pay() {
  console.log(`You have been charged $${total()}.`);
};

const checkout = function checkout() {
  pay();
  shoppingCart = [];
};

// Example purchase.

updateCart('notebook');
updateCart('pencil', 2);
updateCart('coffee', 1);
// "Oh, wait, I do have pencils..."
updateCart('pencil', 0);
console.log(shoppingCart);
checkout();
