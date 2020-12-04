import React from "react";

import "./custom-btn.style.scss";

const CustomBtn = ({ children, inverted, ...otherProps }) => {
  console.log(children);
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
