import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Components/Dashboard/Dashboard";
import { Login } from "../Components/Login/Login";

const AllRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/dashboard" element={<Dashboard />} />
=======
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
>>>>>>> 0752561f763ff986be5711cdc37db7df4a8be443
    </Routes>
  );
};

export default AllRoutes;
