import React from "react";
import "./cart-dropdown.style.scss";

import CustomBtn from "../custom-btn/custom-btn";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomBtn>GO TO CHECKOUT </CustomBtn>
    </div>
  );
};

export default CartDropdown;
