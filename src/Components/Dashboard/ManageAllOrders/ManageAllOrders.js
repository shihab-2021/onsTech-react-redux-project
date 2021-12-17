import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./ManageAllOrders.css";
import { CircularProgress } from "@mui/material";
// import useAuth from "../../../Hooks/useAuth";

export default function ManageAllOrders() {
  // const [order, setOrder] = React.useState({});
  // const { token } = useAuth();
  const [userOrders, setUserOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch("https://sleepy-taiga-46834.herokuapp.com/allBooking")
      .then((res) => res.json())
      .then((data) => setUserOrders(data))
      .then(() => setIsLoading(false));
  }, []);
  const handleUpdateUser = (id) => {
    const url = `https://sleepy-taiga-46834.herokuapp.com/booking/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update Successful");
        }
        console.log(data);
        fetch("https://sleepy-taiga-46834.herokuapp.com/allBooking")
          .then((res) => res.json())
          .then((data) => setUserOrders(data));
      });
  };
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://sleepy-taiga-46834.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingUsers = userOrders.filter(
              (userService) => userService._id !== id
            );
            setUserOrders(remainingUsers);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="heading text-warning">MANAGE ORDERS</h1>
      {isLoading && (
        <div className="d-flex align-items-center my-5 py-5">
          <CircularProgress className="mx-auto" />
        </div>
      )}
      {!isLoading && (
        <Paper id="table" sx={{ overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440, minHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: "350px" }}>Name</TableCell>
                  <TableCell style={{ minWidth: "300px" }} align="center">
                    Email
                  </TableCell>
                  <TableCell style={{ minWidth: "300px" }} align="center">
                    Order Name
                  </TableCell>
                  <TableCell style={{ minWidth: "300px" }} align="center">
                    Order Price
                  </TableCell>
                  <TableCell style={{ minWidth: "300px" }} align="center">
                    Location
                  </TableCell>
                  <TableCell style={{ minWidth: "300px" }} align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userOrders.map((userOrder) => (
                  <TableRow
                    key={userOrder._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {userOrder.name}
                    </TableCell>
                    <TableCell align="center">{userOrder.email}</TableCell>
                    <TableCell align="center">
                      {userOrder.car_Detail.car_name}
                    </TableCell>
                    <TableCell align="center">
                      $ {userOrder.car_Detail.car_price}
                    </TableCell>
                    <TableCell align="center">{userOrder.location}</TableCell>
                    <TableCell align="center">
                      {userOrder.condition === "pending" ? (
                        <button
                          onClick={() => handleUpdateUser(userOrder._id)}
                          className="btn btn-outline-danger me-3 rounded-pill"
                        >
                          Pending
                        </button>
                      ) : (
                        <button className="btn btn-outline-warning me-3 rounded-pill">
                          Shipped
                        </button>
                      )}
                      <button
                        onClick={() => handleDeleteUserService(userOrder._id)}
                        className="btn btn-outline-danger"
                      >
                        <i className="fa-solid fa-trash-can"></i> Remove
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </div>
  );
}
