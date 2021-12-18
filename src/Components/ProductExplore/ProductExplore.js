import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import ExploreProduct from "../ExploreProdct/ExploreProduct";
import Footer from "../Home/Footer/Footer";
// import ProductListing from "../ProductListing/ProductListing";

const ProductExplore = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://arcane-oasis-37685.herokuapp.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
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
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 py-5">
          <ExploreProduct />
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductExplore;
