const initialState = {
  shoppingCart: [

  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ITEM_LOADED':
      return {
        shoppingCart: action.payload
      };
    default:
      return state;
  }

};

export default reducer;
