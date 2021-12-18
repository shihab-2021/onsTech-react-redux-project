import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeCarosel.css";

const HomeCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Q8QqPzR/apple-web-slider.gif"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid"
            src="https://i.ibb.co/xfMpnxP/Vivo-Book-Landing-Page-2200px-X-373px.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/THgQR0b/Ideapad-Slim-5i-GBPL-Web-Banner-2-jpg2-2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/5kYyqvL/ROG-Landing-Page-2200px-X-373px.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
