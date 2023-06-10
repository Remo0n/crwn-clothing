import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeBtn from "../../components/stripe-btn/stripe-btn";

import "./checkout.style.scss";

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce(
    (accumlatedQuantity, cartItem) =>
      accumlatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
      <StripeBtn price={total} />
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(Checkout);
