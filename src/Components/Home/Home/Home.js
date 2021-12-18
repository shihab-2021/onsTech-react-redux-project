import { ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import ProductListing from "../../ProductListing/ProductListing";
import Banner from "../Banner/Banner";
import SvgButton from "../Banner/SvgButton";
import Brands from "../Brands/Brands";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import ShowReview from "../ShowReview/ShowReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className=" py-4">
        <h1 className="text-center text-success heading pt-3">Our Products</h1>
        <ProductListing />
        <div className="d-flex align-items-center">
          <Link to="/productExplore" className="text-center mx-auto mb-4">
            <SvgButton className="text-secondary banner-description">
              See all <i className="fa-solid fa-arrow-right"></i>
            </SvgButton>
          </Link>
        </div>
      </div>
      <div className="py-4">
        <HomeCarousel></HomeCarousel>
      </div>
      <div className="py-3">
        <ShowReview></ShowReview>
      </div>
      <div className="py-5">
        <h1
          style={{ color: "darkslateblue" }}
          className="text-center heading pb-3"
        >
          OUR PARTNERSHIP BRANDS
        </h1>
        <Brands></Brands>
      </div>
      <div>
        <Contact></Contact>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
