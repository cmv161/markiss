import { storage } from '../utils/utils';

const initialState = {
  shoppingCart: storage('shoppingCart') ? storage('shoppingCart') : []

};

const updateCartItems = (cardItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cardItems.slice(0, idx),
      ...cardItems.slice(idx + 1),
    ];
  }
  if (idx === -1) {
    return [
      ...cardItems, item
    ];
  }
  return [
    ...cardItems.slice(0, idx),
    item,
    ...cardItems.slice(idx + 1),
  ];
};

const updateCartItem = (cart, item, quantity) => {

  if (item) {
    return {
      ...item,
      key: item.key,
      count: item.count + quantity,
      total: +item.total + quantity * (+cart.price),
      price: item.price,

      src: item.src
    };

  } else {
    return {
      key: cart.key,
      name: cart.name,
      count: 1,
      price: cart.price,
      total: cart.price,
      src: cart.src

    };
  }

};

const updateOrder = (state, actionPayload, quantity) => {
  const { shoppingCart } = state;
  const itemIndex = shoppingCart.findIndex(({ key }) => key === actionPayload.key);
  const item = shoppingCart[itemIndex];
  const newItem = updateCartItem(actionPayload, item, quantity);
  return {
    ...state,
    shoppingCart: updateCartItems(shoppingCart, newItem, itemIndex)
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOPPING_CART':
      return updateOrder(state, action.payload, 1);
    case 'DEL_ITEM_SHOPPING_CART':
      return updateOrder(state, action.payload, -1);
    case 'ALL-DEL_ITEM_SHOPPING_CART':
      return updateOrder(state, action.payload, -action.payload.count);

    default:
      return state;
  }
};

export default reducer;

