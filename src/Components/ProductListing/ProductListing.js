import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import Product from "../Product/Product";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://onstech-server-side-code.onrender.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data.result));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 py-5">
        <Product />
      </div>
    </div>
  );
};

export default ProductListing;
