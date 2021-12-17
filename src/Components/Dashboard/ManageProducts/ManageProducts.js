import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ManageProducts.css";
import StarIcon from "@mui/icons-material/AccessAlarm";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://arcane-oasis-37685.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .then(() => setIsLoading(false));
  }, []);
  const handleDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    console.log(id);
    if (proceed) {
      const url = `https://arcane-oasis-37685.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            console.log(id);
            alert("Deleted Successfully!");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };
  return (
    <div className="container">
      <h1 className="heading text-primary">MANAGE PRODUCTS</h1>
      {isLoading && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {!isLoading && (
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-2 py-5">
          {products.map((singleProduct) => (
            // <div key={singleCar._id} className="col">
            //   <div className="card shadow" style={{ minHeight: "680px" }}>
            //     <div className="card bg-dark text-white">
            //       <img
            //         src={singleCar.image}
            //         className="card-img img-fluid"
            //         alt="..."
            //       />
            //       <div className="card-img-overlay p-0">
            //         <div>
            //           <div className="d-flex justify-content-between">
            //             <p></p>
            //             <h5
            //               className="p-1 my-2"
            //               style={{ backgroundColor: "#465c57" }}
            //             >
            //               <span className="text-danger">$</span>
            //               {singleCar.car_price}
            //             </h5>
            //           </div>
            //           <div className="footer">
            //             <p className="my-0 mx-3 p-2">
            //               ({singleCar.review} Reviews)
            //               <br />
            //               <Rating
            //                 name="half-rating-read"
            //                 value={`${singleCar.rating}`}
            //                 precision={0.5}
            //                 readOnly
            //               />
            //             </p>
            //           </div>
            //         </div>
            //       </div>
            //     </div>
            //     <div className="card-body">
            //       <h5 className="card-title">{singleCar.car_name}</h5>
            //       <h6>Price: ${singleCar.car_price}</h6>
            //       <p className="card-text fw-bold text-secondary pt-2">
            //         {singleCar?.detail?.slice(0, 250)}{" "}
            //         <Link to={`/details/${singleCar._id}`}>
            //           <small>...show more</small>
            //         </Link>
            //       </p>
            //     </div>
            //     <div className="d-flex" style={{ backgroundColor: "#dbe3e3" }}>
            //       <Link
            //         to={`/details/${singleCar._id}`}
            //         className="w-50 text-center my-2 link"
            //       >
            //         <button className="btn btn-outline-success">
            //           Detail <i className="fas fa-info-circle"></i>
            //         </button>
            //       </Link>
            //       <button
            //         onClick={() => handleDeleteProduct(singleCar._id)}
            //         type="button"
            //         className="align-self-center btn btn-outline-danger mx-auto"
            //       >
            //         Delete <i className="fa-solid fa-trash-can"></i>
            //       </button>
            //     </div>
            //   </div>
            // </div>
            <div key={singleProduct._id} className="col">
              <div>
                <div className="card shadow" style={{ minHeight: "500px" }}>
                  <div
                    style={{ minHeight: "200px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      src={singleProduct.image1}
                      className="card-img img-fluid p-1"
                      alt="..."
                    />
                  </div>
                  <div className="card-body border-top">
                    <h5>${singleProduct.product_price}</h5>
                    <h6 className="card-title">
                      {singleProduct.product_name?.slice(0, 50)} ...
                    </h6>
                    <Rating
                      style={{ fontSize: "15px" }}
                      name="half-rating-read"
                      value={`${singleProduct.rating}`}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <div
                    className="text-center py-2"
                    style={{ backgroundColor: "#dbe3e3" }}
                  >
                    <Link
                      className="fw-bold"
                      style={{ textDecoration: "none", color: "goldenrod" }}
                      to={`/details/${singleProduct._id}`}
                    >
                      <i className="fas fa-info-circle"></i> Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
