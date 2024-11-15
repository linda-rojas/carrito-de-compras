/**
 * this function calculates total price off a order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {Number} total price
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));

  return sum;
};
