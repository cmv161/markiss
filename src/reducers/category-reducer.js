const initialState = {
  category: null,
};

export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
}
