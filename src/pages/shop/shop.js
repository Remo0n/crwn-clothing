import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Route path="/shop" component={CollectionOverview} />
    </div>
  );
};

export default ShopPage;
