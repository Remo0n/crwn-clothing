import React from "react";
import "./cart-icon.style.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

const CartIcon = ({ toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => ({
  itemCount: state.cart.cartItems.reduce(
    (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
    0
  )
});

export default connect(mapStateToProps, { toggleCart })(CartIcon);
