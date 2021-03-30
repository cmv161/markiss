import { combineReducers } from "redux";
import categoryReducer from "./category-reducer";
import shoppingCartReducer from "./shopping-cart-reducer";
import authorizationReducer from "./authorization-reducer";

export default combineReducers({
  categoryReducer,
  shoppingCartReducer,
  authorizationReducer,
});
