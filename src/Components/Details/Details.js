import {
  Button,
  CircularProgress,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/AccessAlarm";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions/productActions";
import useAuth from "../Hooks/useAuth";
import Review from "../Dashboard/Review/Review";
import "./Details.css";
import HomeCarousel from "../Home/HomeCarousel/HomeCarousel";
import Contact from "../Home/Contact/Contact";
import Footer from "../Home/Footer/Footer";

const Details = () => {
  const [image, setImage] = useState("");
  console.log(image);
  const product = useSelector((state) => state.product);
  const {
    _id,
    product_name,
    product_price,
    brand,
    screen_size,
    rating,
    review,
    cpu,
    detail,
    image1,
    image2,
    image3,
    image4,
  } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [bookingData, setBookingData] = useState({});
  const navigate = useNavigate();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...bookingData };
    newProductData[field] = value;
    setBookingData(newProductData);
  };
  const handleProductDateSubmit = (e) => {
    const booking = {
      ...bookingData,
      name: user.displayName,
      email: user.email,
      condition: "pending",
      product_Detail: product,
    };
    fetch("https://arcane-oasis-37685.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Order SuccessFull ");
          document.getElementById("Form").reset();
          navigate("/dashboard/myOrders");
        }
      });

    e.preventDefault();
  };
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://arcane-oasis-37685.herokuapp.com/products/${productId}`)
      .catch((err) => {
        console.log("error ", err);
      });
    dispatch(selectedProduct(response.data));
    setImage(response.data.image1);
    console.log(image);
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {!product_name && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {product_name && (
        <div>
          <div id="detail-carousel" className="pb-1">
            <HomeCarousel></HomeCarousel>
          </div>
          <section className="container py-4">
            <h2 style={{ fontFamily: `"Yanone Kaffeesatz", sans-serif` }}>
              <small>
                <i className="fas fa-laptop"></i>
              </small>
              {"  "}
              {product_name}
            </h2>
            <div className="row">
              <div className="col-sm-12 col-md-7">
                <div
                  // style={{ height: "660px" }}
                  className="card border-0 text-white d-flex flex-row detail-image-section"
                >
                  <div className="col-2">
                    <ul className="p-0" style={{ listStyle: "none" }}>
                      <li>
                        <button
                          className="p-0 mb-1"
                          onClick={() => setImage(`${image1}`)}
                        >
                          <img
                            style={{ width: "50px", height: "50px" }}
                            className="img-fluid"
                            src={image1}
                            alt=""
                          />
                        </button>
                      </li>
                      <li>
                        <button
                          className="p-0 mb-1"
                          onClick={() => setImage(`${image2}`)}
                        >
                          <img
                            style={{ width: "50px", height: "50px" }}
                            className="img-fluid"
                            src={image2}
                            alt=""
                          />
                        </button>
                      </li>
                      <li>
                        <button
                          className="p-0 mb-1"
                          onClick={() => setImage(`${image3}`)}
                        >
                          <img
                            style={{ width: "50px", height: "50px" }}
                            className="img-fluid"
                            src={image3}
                            alt=""
                          />
                        </button>
                      </li>
                      <li>
                        <button
                          className="p-0 mb-1"
                          onClick={() => setImage(`${image4}`)}
                        >
                          <img
                            style={{ width: "50px", height: "50px" }}
                            className="img-fluid"
                            src={image4}
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img
                      // style={{ maxWidth: "325px" }}
                      src={image}
                      className="img-fluid mx-auto"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <p className="text-secondary fw-bold m-0 detail-option">
                  <small>PRICE:</small>
                </p>
                <h5 className="border-danger border-bottom d-inline-block mb-3 detail-option-value">
                  <span className="text-danger">$</span>
                  {product_price}
                </h5>
                <p className="text-secondary fw-bold m-0 detail-option">
                  <small>BRAND:</small>
                </p>
                <h5 className="border-danger border-bottom d-inline-block mb-3 detail-option-value">
                  {brand}
                </h5>
                <p className="text-secondary fw-bold m-0 detail-option">
                  <small>CPU:</small>
                </p>
                <h5 className="border-danger border-bottom d-inline-block mb-3 detail-option-value">
                  {cpu}
                </h5>
                <p className="text-secondary fw-bold m-0 detail-option">
                  <small>SCREEN SIZE:</small>
                </p>
                <h5 className="border-danger border-bottom d-inline-block mb-3 detail-option-value">
                  {screen_size}
                </h5>
                <p>
                  <small className="ps-1">({review} Reviews)</small>
                  <br />
                  <Rating
                    style={{ fontSize: "17px" }}
                    name="half-rating-read"
                    value={rating}
                    precision={0.5}
                    readOnly
                  />
                </p>
                <a href="#buyNow">
                  <button
                    type="button"
                    className="align-self-center btn btn-outline-warning mx-auto"
                  >
                    BUY NOW <i className="fas fa-money-check-alt"></i>
                  </button>
                </a>
              </div>
            </div>
            <h6 className="pt-4 fw-bold text-secondary mt-5">
              <span className="text-dark fs-5">Product Detail:</span>
              <br />
              {detail}
            </h6>
          </section>
          <div
            id="show"
            style={{
              minHeight: "450px",
              backgroundImage: `url(https://i.ibb.co/NxpPwq8/Buy-now.jpg)`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            <div id="buyNow" className="container">
              <form
                id="Form"
                className="my-5 p-4 rounded shadow mx-auto"
                style={{ maxWidth: "50rem", backgroundColor: "#0000008c" }}
                onSubmit={handleProductDateSubmit}
              >
                <Typography
                  style={{
                    color: "deeppink",
                    textAlign: "center",
                    fontFamily: `"Yanone Kaffeesatz", sans-serif`,
                  }}
                  sx={{ my: 3 }}
                  variant="h3"
                  gutterBottom
                >
                  BUY NOW
                </Typography>
                <Typography variant="h6" className="text-primary fw-bold">
                  Hi <span className="text-success">{user.displayName}</span>,
                  your selected product model is{" "}
                  <span className="text-success">{product_name}</span>
                  .<br />
                  <span className="text-danger">
                    Please fill up the text field to parches the product.
                  </span>
                  Thank you.
                </Typography>
                <TextField
                  sx={{ width: "95%", m: 1, input: { color: "white" } }}
                  id="standard-basic"
                  label="Your Name"
                  focused
                  value={`${user.displayName}`}
                  color="success"
                  name="name"
                  variant="standard"
                />
                <TextField
                  sx={{ width: "95%", m: 1, input: { color: "white" } }}
                  id="standard-basic"
                  label="Your Email"
                  color="success"
                  focused
                  value={`${user.email}`}
                  name="email"
                  variant="standard"
                />
                <div id="emailHelp" className="form-text text-primary">
                  We will take your name and email by default.
                </div>
                <TextField
                  sx={{ width: "95%", m: 1, input: { color: "white" } }}
                  id="standard-basic"
                  label="Phone"
                  color="success"
                  name="phone"
                  required
                  placeholder="Please Enter Your Phone Number"
                  onBlur={handleOnBlur}
                  variant="standard"
                  focused
                />
                <TextField
                  sx={{ width: "95%", m: 1, input: { color: "white" } }}
                  id="standard-basic"
                  color="success"
                  required
                  placeholder="Please Enter Your Location"
                  label="Your Location"
                  name="location"
                  onBlur={handleOnBlur}
                  variant="standard"
                  focused
                />

                <Button
                  sx={{ width: "95%", m: 1 }}
                  style={{
                    backgroundColor: "crimson",
                  }}
                  type="submit"
                  variant="contained"
                >
                  BUY
                </Button>
                {/* {isLoading && <CircularProgress />} */}
              </form>
            </div>
          </div>
          <div className=" py-3" style={{ backgroundColor: "#fff" }}>
            <div>
              <Review></Review>
            </div>
          </div>
          <div>
            <Contact></Contact>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
