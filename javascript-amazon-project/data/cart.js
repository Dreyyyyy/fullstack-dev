export const cart = [];

export function addToCart(productId, selectedValue, cartQuantity) {
  let matchingCartItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingCartItem = cartItem;
    }
  });

  if (matchingCartItem) {
    matchingCartItem.quantity += selectedValue;
  } else {
    cart.push({
      productId,
      quantity: selectedValue,
    });
  }
}
