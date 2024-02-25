import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard.jsx";
import { Login } from "../Components/Login/Login";
import Pizza from "../Components/MenuItems/Pizza";

import { AddNewPizza } from "../Components/AddNewPizza/AddNewPizza.jsx";
import { CreateYourOwnPizza } from "../Components/CreateYourOwnPizza/CreateYourOwnPizza.jsx";
import { AddNewBurger } from "../Components/AddNewBurger/AddNewBurger.jsx";
import { HouseOfWings } from "../Components/HouseOfWings/HouseOfWings.jsx";

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
    </Routes>
  );
};

export default AllRoutes;
