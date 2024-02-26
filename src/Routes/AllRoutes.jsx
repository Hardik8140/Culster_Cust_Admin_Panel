import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard.jsx";
import { Login } from "../Components/Login/Login";
import Pizza from "../Components/MenuItems/Pizza";

import { AddNewPizza } from "../Components/AddNewPizza/AddNewPizza.jsx";

import { CreateYourOwnPizza } from "../Components/CreateYourOwnPizza/CreateYourOwnPizza.jsx";
import { AddNewBurger } from "../Components/AddNewBurger/AddNewBurger.jsx";
import { HouseOfWings } from "../Components/HouseOfWings/HouseOfWings.jsx";

import DeliveryBoy from "../Components/Delivery Boy/DeliveryBoy.jsx";
import Orders from "../Components/Orders/Orders.jsx";
import TImeManage from "../Components/Time Manage/TImeManage.jsx";
import TableReservation from "../Components/Table Reservation/TableReservation.jsx";
import CustomerReview from "../Components/Coustomer Review/CustomerReview.jsx";
import OrderDetails from "../Components/Orders/OrderDetails.jsx";
import { AddPastas } from "../Components/AddPastas/AddPastas.jsx";
import { AddNanza } from "../Components/AddNanza/AddNanza.jsx";
import { AddCheesyFun } from "../Components/AddCheesyFun/AddCheesyFun.jsx";
import { AddSides } from "../Components/AddSides/AddSides.jsx";
import { AddSalads } from "../Components/AddSalads/AddSalads.jsx";
import { AddDippingSauces } from "../Components/AddDippingSauces/AddDippingSauces.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />

      <Route path="/pizza" element={<Pizza />} />
      <Route path="/createyourownpizza" element={<CreateYourOwnPizza />} />
      <Route path="/add/burger" element={<AddNewBurger />} />
      <Route path="/add/pizza" element={<AddNewPizza />} />
      <Route path="/add/houseofwings" element={<HouseOfWings />} />
      <Route path="/add/pastas" element={<AddPastas />} />
      <Route path="/add/nanza" element={<AddNanza />} />
      <Route path="/add/cheesyfun" element={<AddCheesyFun />} />
      <Route path="/add/sides" element={<AddSides />} />
      <Route path="/add/saladtoppings" element={<AddSalads />} />
      <Route path="/add/dippingsauces" element={<AddDippingSauces />} />

      <Route path="/boy" element={<DeliveryBoy />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<OrderDetails />} />
      <Route path="/time" element={<TImeManage />} />
      <Route path="/table" element={<TableReservation />} />
      <Route path="/customer" element={<CustomerReview />} />
    </Routes>
  );
};

export default AllRoutes;
