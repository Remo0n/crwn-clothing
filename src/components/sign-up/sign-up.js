import React, { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomBtn from "../custom-btn/custom-btn";
import { auth } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";

import "./sign-up.style.scss";

const SignUp = () => {
  const [displayName, setDisplayname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dose not match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user, "user from createUserWithEmailAndPassword method");
      //createUserProfileDocument(user, { displayName });
      setDisplayname("");
      setConfirmPassword("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDisplayNameChange = (e) => {
    setDisplayname(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account </h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleDisplayNameChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          label="Confirm Password"
          required
        />
        <CustomBtn type="submit">SIGN UP</CustomBtn>
      </form>
    </div>
  );
};

export default SignUp;
