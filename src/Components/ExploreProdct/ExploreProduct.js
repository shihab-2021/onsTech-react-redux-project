import { Rating } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ExploreProduct = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const {
      _id,
      product_name,
      product_price,
      brand,
      sereen_size,
      rating,
      review,
      cpu,
      detail,
      image1,
    } = product;
    return (
      <div key={_id} className="col">
        <div>
          <div className="card shadow" style={{ minHeight: "450px" }}>
            <div
              style={{ minHeight: "215px" }}
              className="d-flex justify-content-center align-items-center"
            >
              <img src={image1} className="card-img img-fluid p-1" alt="..." />
            </div>
            <div className="card-body border-top">
              <h5>${product_price}</h5>
              <h6 className="card-title">{product_name?.slice(0, 50)} ...</h6>
              <Rating
                style={{ fontSize: "15px" }}
                name="half-rating-read"
                value={`${rating}`}
                precision={0.5}
                readOnly
              />
            </div>
            <Link
              className="fw-bold"
              style={{ textDecoration: "none", color: "goldenrod" }}
              to={`/details/${_id}`}
            >
              <div
                className="text-center py-2"
                style={{ backgroundColor: "#dbe3e3" }}
              >
                <i className="fas fa-info-circle"></i> Detail
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ExploreProduct;
