import { CartActionType } from "./cart.actiontype";

export const toggleCart = () => {
  return {
    type: CartActionType.TOGGLE_CART_DROPDOWN
  };
};

export const addItem = item => {
  return {
    type: CartActionType.ADD_ITEM,
    payload: item
  };
};

export const removeItem = item => {
  return {
    type: CartActionType.REMOVE_ITEM,
    payload: item
  };
};

export const clearItemFromCart = item => {
  return {
    type: CartActionType.CLEAR_ITEM_FROM_CART,
    payload: item
  };
};
