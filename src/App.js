import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Checkout from "./pages/checkout/checkout";
import Navbar from "./components/navbar/navbar";
import SigninAndSignup from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth } from "./firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import CollectionPage from "./pages/collection/collection";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

const App = ({ setCurrentUser, currentUser }) => {
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = onAuthStateChanged(auth, (userAuthInfo) => {
      if (userAuthInfo) {
        setCurrentUser(userAuthInfo);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [unsubscribeFromAuth]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route
          exact
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SigninAndSignup />}
        />
        <Route path={`/shop/:collectionId`} element={<CollectionPage />} />
      </Routes>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, { setCurrentUser })(App);
