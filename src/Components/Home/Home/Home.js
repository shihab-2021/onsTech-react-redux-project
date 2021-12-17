import { ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import ProductListing from "../../ProductListing/ProductListing";
import Banner from "../Banner/Banner";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import ShowReview from "../ShowReview/ShowReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" py-4">
        <h1 className="text-center text-success heading pt-3">Our Products</h1>
        <ProductListing />
      </div>
      <div className="py-4">
        <HomeCarousel></HomeCarousel>
      </div>
      <div className="py-3">
        <ShowReview></ShowReview>
      </div>
    </div>
  );
};

export default Home;
