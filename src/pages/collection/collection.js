import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";

import CollectionItem from "../../components/collection-item/collection-item";

import "./collection.style.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5,
};

const mapStateToProps = (state) => ({
  collection: state.shop.collections.find(
    (collection) =>
      collection.id === COLLECTION_ID_MAP[useParams().collectionId]
  ),
});

export default connect(mapStateToProps)(CollectionPage);
