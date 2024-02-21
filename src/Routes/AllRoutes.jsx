import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/Dashboard.jsx";
import { Login } from "../Components/Login/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
