const initialState = {
  authorization: false,
};

export default function authorizationReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTHORIZATION":
      return {
        ...state,
        authorization: action.payload,
      };
    default:
      return state;
  }
}
