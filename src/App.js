import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Navbar from "./components/navbar/navbar";
import SigninAndSignup from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuthInfo => {
      if (userAuthInfo) {
        const userRef = await createUserProfileDocument(userAuthInfo);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [unsubscribeFromAuth]);

  console.log(currentUser);

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SigninAndSignup} />
      </Switch>
    </div>
  );
};

export default App;
