import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddAProduct from "./Components/Dashboard/AddAProduct/AddAProduct";
import ProductListing from "./Components/ProductListing/ProductListing";
import Details from "./Components/Details/Details";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login/Login";
import AdminRoute from "./Components/Login/AdminRoute/AdminRoute";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import useAuth from "./Components/Hooks/useAuth";
import ManageProducts from "./Components/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
import Pay from "./Components/Dashboard/Pay/Pay";
import Review from "./Components/Dashboard/Review/Review";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Components/Dashboard/ManageAllOrders/ManageAllOrders";
import Footer from "./Components/Home/Footer/Footer";

function App() {
  let { admin } = useAuth();
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productListing" element={<ProductListing />} />
          <Route path="/details/:productId" element={<Details />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="addAProduct"
              element={
                <AdminRoute>
                  <AddAProduct />
                </AdminRoute>
              }
            />
            <Route path="myOrders" element={<MyOrders />} />
            <Route path="pay" element={<Pay />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          >
            <Route path="makeAdmin" element={<MakeAdmin />} />
            <Route path="manageAllOrders" element={<ManageAllOrders />} />
            <Route path="manageProducts" element={<ManageProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </AuthProvider>
  );
}

export default App;
