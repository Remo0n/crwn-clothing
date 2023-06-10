import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { signOut } from "firebase/auth";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import "./navbar.style.scss";

const Navbar = ({ currentUser, open }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        {/* <Link to="/contact" className="option">
          CONTACT
        </Link> */}

        {currentUser ? (
          <div className="option" onClick={() => signOut(auth)}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {open && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  open: state.cart.open,
});

export default connect(mapStateToProps)(Navbar);
