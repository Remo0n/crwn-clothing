import { CartActionType } from "./cart.actiontype";
import { addItemToCart } from "./cart.utils";
const INITIAL_STATE = {
  open: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        open: !state.open
      };
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
