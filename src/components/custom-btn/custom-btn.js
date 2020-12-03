import React from "react";

import "./custom-btn.style.scss";

const CustomBtn = ({ children, ...otherProps }) => {
  console.log(children);
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomBtn;
