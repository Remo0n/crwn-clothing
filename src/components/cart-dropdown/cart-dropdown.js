import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item";
import CustomBtn from "../custom-btn/custom-btn";
import { useNavigate } from "react-router-dom";
import { toggleCart } from "../../redux/cart/cart.actions";

import "./cart-dropdown.style.scss";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

const CartDropdown = ({ cartItems, toggleCart }) => {
  const history = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} id={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>

      <CustomBtn
        onClick={() => {
          history("/checkout");
          toggleCart();
        }}
      >
        GO TO CHECKOUT
      </CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default withRouter(
  connect(mapStateToProps, { toggleCart })(CartDropdown)
);
