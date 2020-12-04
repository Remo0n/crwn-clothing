import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import CustomBtn from "../custom-btn/custom-btn";

import "./cart-dropdown.style.scss";
const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem id={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomBtn>GO TO CHECKOUT </CustomBtn>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
