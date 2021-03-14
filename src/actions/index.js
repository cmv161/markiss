const shoppingCartPushRedux = (shoppingCart) => {
  return {
    type: 'SHOPPING_CART',
    payload: shoppingCart
  };
};

const shoppingCartDeleteRedux = (shoppingCart) => {
  return {
    type: 'DEL_ITEM_SHOPPING_CART',
    payload: shoppingCart
  };
};
const shoppingCartAllDeleteRedux = (shoppingCart) => {
  return {
    type: 'ALL-DEL_ITEM_SHOPPING_CART',
    payload: shoppingCart
  };
};

export { shoppingCartPushRedux, shoppingCartDeleteRedux, shoppingCartAllDeleteRedux };

