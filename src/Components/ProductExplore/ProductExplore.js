import React from "react";
import Footer from "../Home/Footer/Footer";
import ProductListing from "../ProductListing/ProductListing";

const ProductExplore = () => {
  return (
    <div>
      <div>
        <h1
          style={{ color: "darksalmon" }}
          className="text-center heading pt-5"
        >
          OUR ALL PRODUCT COLLECTION
        </h1>
      </div>
      <ProductListing></ProductListing>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductExplore;
