import React from "react";
import "./menu-item.style.scss";
import { Link } from "react-router-dom";

const MenuItem = (props) => {
  console.log(props);
  const { title, imgUrl, size } = props;
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="content">
        <Link to={`/shop/${title}`}>
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
