import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/Login/Login";
import Pizza from "../Components/MenuItems/Pizza";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/pizza" element={<Pizza />} />
    </Routes>
  );
};

export default AllRoutes;
