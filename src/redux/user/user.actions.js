import { UserActionTypes } from "./user.actiontype";

export const setCurrentUser = user => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
  };
};
