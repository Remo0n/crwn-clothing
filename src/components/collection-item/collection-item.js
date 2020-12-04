import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomBtn from "../custom-btn/custom-btn";
import "./collection-item.style.scss";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomBtn inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomBtn>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
