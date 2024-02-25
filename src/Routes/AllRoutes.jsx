import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard.jsx";
import { Login } from "../Components/Login/Login";
import Pizza from "../Components/MenuItems/Pizza";

import { AddNewPizza } from "../Components/AddNewPizza/AddNewPizza.jsx";
import DeliveryBoy from "../Components/Delivery Boy/DeliveryBoy.jsx";
import Orders from "../Components/Orders/Orders.jsx";
import TImeManage from "../Components/Time Manage/TImeManage.jsx";
import TableReservation from "../Components/Table Reservation/TableReservation.jsx";
import CustomerReview from "../Components/Coustomer Review/CustomerReview.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pizza" element={<Pizza />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/addpizza" element={<AddNewPizza />} />
      <Route path="/boy" element={<DeliveryBoy />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/time" element={<TImeManage />} />
      <Route path="/table" element={<TableReservation />} />
      <Route path="/customer" element={<CustomerReview />} />
    </Routes>
  );
};

export default AllRoutes;
