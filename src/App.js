import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AddAProduct from "./Components/Dashboard/AddAProduct/AddAProduct";
import Details from "./Components/Details/Details";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login/Login";
import AdminRoute from "./Components/Login/AdminRoute/AdminRoute";
import AuthProvider from "./Components/Contexts/AuthProvider/AuthProvider";
import ManageProducts from "./Components/Dashboard/ManageProducts/ManageProducts";
import MyOrders from "./Components/Dashboard/MyOrders/MyOrders";
import Pay from "./Components/Dashboard/Pay/Pay";
import Review from "./Components/Dashboard/Review/Review";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Components/Dashboard/ManageAllOrders/ManageAllOrders";
import Register from "./Components/Login/Register/Register";
import ProductExplore from "./Components/ProductExplore/ProductExplore";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/productExplore"
            element={
              <PrivateRoute>
                <ProductExplore />
              </PrivateRoute>
            }
          />
          <Route
            path="/details/:productId"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
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
    </AuthProvider>
  );
}

export default App;
