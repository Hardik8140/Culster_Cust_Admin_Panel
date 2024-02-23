import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard.jsx";
import { Login } from "../Components/Login/Login";
import { AddNewPizza } from "../Components/AddNewPizza/AddNewPizza.jsx";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/addpizza" element={<AddNewPizza />} />
    </Routes>
  );
};

export default AllRoutes;
