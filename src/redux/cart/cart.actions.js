import { CartActionType } from "./cart.actiontype";

export const toggleCart = () => {
  return {
    type: CartActionType.TOGGLE_CART_DROPDOWN
  };
};
