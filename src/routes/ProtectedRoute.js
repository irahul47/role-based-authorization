import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (role) => {
  return role?.permission ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;
