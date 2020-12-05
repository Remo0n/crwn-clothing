import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userRducer from "./user/user.reducer";
import cartRducer from "./cart/cart.reducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"]
};

const rootReducer = combineReducers({
  user: userRducer,
  cart: cartRducer
});

export default persistReducer(persistConfig, rootReducer);
