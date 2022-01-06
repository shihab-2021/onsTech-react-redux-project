import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productActions";
import ExploreProduct from "../ExploreProdct/ExploreProduct";
import Footer from "../Home/Footer/Footer";

const ProductExplore = () => {
  const [page, setPage] = useState(0);
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const [serviceCount, setServiceCount] = useState();
  const url = "http://localhost:5000/products";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceCount(data));
    console.log(serviceCount?.count);
  }, [!serviceCount]);
  const size = 10;
  // console.log(products.length);
  let pageNumber = 0;
  if (serviceCount) {
    pageNumber = Math.ceil(serviceCount.count / size);
  }
  const fetchProducts = async () => {
    const response = await axios
      .get(`http://localhost:5000/products?page=${page}&&size=${size}`)
      .catch((err) => {
        console.log("error", err);
      });
    dispatch(setProducts(response.data.result));

    // console.log(response.data.count);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);
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
      <div className="text-center mt-30 mb-5">
        {pageNumber &&
          [...Array(pageNumber)?.keys()].map((number) => (
            <button
              className="btn btn-info "
              className={
                number === page
                  ? "btn btn-outline-info mx-2"
                  : "btn btn-info mx-1"
              }
              key={number}
              onClick={() => setPage(number)}
            >
              {number}
            </button>
          ))}
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductExplore;
