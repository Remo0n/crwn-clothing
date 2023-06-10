import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomBtn from "..//custom-btn/custom-btn";
import { ReactComponent as GoogleLogo } from "../../assets/google-icon.svg";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";

import "./sign-in.style.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => console.log(userCredential)
      );
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    console.log();
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleEmailChange}
          required
          label="Email"
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handlePasswordChange}
          required
          label="Password"
        />
        <div className="btn-group">
          <CustomBtn type="submit"> SIGN IN</CustomBtn>
          <GoogleLogo className="google-logo" onClick={signInWithGoogle} />
        </div>
      </form>
    </div>
  );
};

export default SignIn;
