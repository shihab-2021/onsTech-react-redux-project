import React, { useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
// import useAuth from "../../../Hooks/useAuth";
import { NavLink } from "react-router-dom";

const AddAProduct = () => {
  const [carData, setCarData] = useState({});
  // const { isLoading } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newCarData = { ...carData };
    newCarData[field] = value;
    setCarData(newCarData);
  };
  const handleProductDateSubmit = (e) => {
    const product = { ...carData };
    fetch("https://onstech-server-side-code.onrender.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully Added.");
          document.getElementById("Form").reset();
        }
      });
    e.preventDefault();
  };

  return (
    <Container>
      <form
        id="Form"
        className="my-5 p-4 rounded shadow mx-auto"
        style={{ maxWidth: "50rem" }}
        onSubmit={handleProductDateSubmit}
      >
        <Typography
          style={{ textAlign: "center" }}
          sx={{ my: 3 }}
          variant="h5"
          gutterBottom
        >
          Add New Product
        </Typography>
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Product Name"
          name="product_name"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Product Price"
          name="product_price"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Brand"
          name="brand"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Screen Size"
          name="screen_size"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Rating"
          name="rating"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Review"
          name="review"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="CPU"
          name="cpu"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Image url-1"
          name="image1"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Image url-2"
          name="image2"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Image url-3"
          name="image3"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-basic"
          label="Image url-4"
          name="image4"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <TextField
          sx={{ width: "95%", m: 1 }}
          id="standard-multiline-static"
          label="Detail"
          name="detail"
          onBlur={handleOnBlur}
          multiline
          rows={4}
          variant="standard"
        />

        <Button
          sx={{ width: "95%", m: 1 }}
          style={{
            backgroundColor: "crimson",
          }}
          type="submit"
          variant="contained"
        >
          Add to Database
        </Button>
        {/* {isLoading && <CircularProgress />} */}
      </form>
    </Container>
  );
};

export default AddAProduct;
