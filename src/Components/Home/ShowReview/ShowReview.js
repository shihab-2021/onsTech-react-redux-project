import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ShowReview.css";

const ShowReview = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://arcane-oasis-37685.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .then(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="heading text-secondary text-center pt-5">
          OUR CUSTOMER <span className="text-danger">REVIEWS</span>
        </h1>
        {isLoading && (
          <div className="d-flex align-items-center my-5 py-5">
            <CircularProgress className="mx-auto" />
          </div>
        )}
        {reviews[0] && (
          <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 py-5">
              {reviews.map((review) => (
                <div key={review._id} className="col my-4">
                  <div style={{ minHeight: "400px" }} className="card shadow">
                    <div className="card-body">
                      <div className="review-card">
                        <div>
                          <h5 className="card-title fw-bold">{review.name}</h5>
                          <h6 className="card-subtitle mb-2 text-muted">
                            {review.email}
                          </h6>
                          <Rating
                            name="half-rating-read"
                            value={`${review.rating}`}
                            precision={0.5}
                            readOnly
                          />
                        </div>
                        <img
                          style={{
                            height: "120px",
                            width: "120px",
                            marginTop: "-70px",
                            marginLeft: "-5px",
                          }}
                          src={review?.image}
                          className="img-fluid rounded-circle p-2"
                          alt="..."
                        />
                      </div>
                      <div className="d-flex">
                        <p className="card-text fw-bold overflow-auto">
                          <span className="fs-3 px-2 text-secondary">
                            <i class="fas fa-quote-left"></i>
                          </span>
                          {review?.feedback?.slice(0, 200)}{" "}
                          <span className="text-muted">
                            {review?.feedback?.slice(250) && <p>...see more</p>}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowReview;
