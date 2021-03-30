const shoppingCartPushRedux = (shoppingCart) => {
  return {
    type: "SHOPPING_CART",
    payload: shoppingCart,
  };
};

const shoppingCartDeleteRedux = (shoppingCart) => {
  return {
    type: "DEL_ITEM_SHOPPING_CART",
    payload: shoppingCart,
  };
};
const shoppingCartAllDeleteRedux = (shoppingCart) => {
  return {
    type: "ALL-DEL_ITEM_SHOPPING_CART",
    payload: shoppingCart,
  };
};

const categoryAddProductRedux = (category) => {
  return {
    type: "ADD_CATEGORY",
    payload: category,
  };
};

const authorizationToggleRedux = (authorization) => {
  return {
    type: "AUTHORIZATION",
    payload: authorization,
  };
};

export {
  shoppingCartPushRedux,
  shoppingCartDeleteRedux,
  shoppingCartAllDeleteRedux,
  categoryAddProductRedux,
  authorizationToggleRedux,
};
