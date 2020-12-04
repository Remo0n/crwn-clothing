import { CartActionType } from "./cart.actiontype";
const INITIAL_STATE = {
  open: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        open: !state.open
      };
    default:
      return state;
  }
};

export default cartReducer;
