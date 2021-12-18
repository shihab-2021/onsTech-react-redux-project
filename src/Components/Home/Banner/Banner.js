import { Button } from "@mui/material";
import React from "react";
import bannerImg from "../../../images/banner-laptop.jpg";
import microsoft_banner from "../../../images/microsoft-banner.jpg";
import mac_banner from "../../../images/mac-banner.jpg";
import chromebook_banner from "../../../images/chromebook-banner.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
// import useAuth from "../../../../Hooks/useAuth";
// import Carousel from "../Carousel/Carousel";
import "./Banner.css";
import SvgButton from "./SvgButton";

const Banner = () => {
  //   const { user } = useAuth();
  return (
    <div className="container">
      <div
        className="w-100 d-flex flex-column justify-content-center align-items-center text-center my-2"
        style={{
          minHeight: "550px",
          background: `linear-gradient(#00000094, #00000094), url(${bannerImg}) no-repeat center center / cover`,
          borderRadius: "15px",
        }}
      >
        <h1 className="logoHeading">
          <span className="text-danger">o</span>
          <span className="text-warning">n</span>
          <span className="text-info">s</span>
          <span className="text-success">Tech</span>
        </h1>
        <h2 className="text-light heading">
          Connect with the
          <span className="text-danger"> world</span>
        </h2>
        <h5
          style={{ maxWidth: "550px" }}
          className="mx-auto text-secondary p-2 banner-description"
        >
          World's Largest Brand Marketplace. Choose Your Favorite Product and
          Order Now! Global Brands Coverage. 100% On-time Shipment Protection.
          Shop Online Today!
        </h5>
        <Link style={{ textDecoration: "none" }} to="/about">
          <SvgButton className="text-info banner-description">
            About us
          </SvgButton>
        </Link>
      </div>
      <div className="row align-items-center container mx-auto">
        <div className="col-12 col-md-6">
          <img className="img-fluid" src={microsoft_banner} alt="" />
          <h4>Microsoft Windows </h4>
          <h6>
            <a className="visit-store" href="/">
              <small>Visit the Windows store {">"}</small>
            </a>
          </h6>
        </div>
        <div className="col-12 col-md-6 py-3">
          <img className="img-fluid" src={mac_banner} alt="" />
          <h4>Apple MacOS </h4>
          <h6>
            <a className="visit-store" href="/">
              <small>Visit the Apple store {">"}</small>
            </a>
          </h6>
        </div>
      </div>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <img className="img-fluid px-2" src={chromebook_banner} alt="" />
            <div className="px-3">
              <h4>Google Chrome</h4>
              <h6>
                <a className="visit-store" href="/">
                  <small>Visit the Google store {">"}</small>
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
