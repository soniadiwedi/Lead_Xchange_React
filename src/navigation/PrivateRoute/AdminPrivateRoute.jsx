import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = (props) => {
  const { Component, department, user, funcNav, funcFooter } = props;
  const location = useLocation();

  if (department === "Admin" && user) {
    return <Component funcNav={funcNav} funcFooter={funcFooter} />;
  } else {
    return (
      <Navigate to="/admin_login" state={{ history: location?.pathname }} />
    );
  }
};

export default AdminPrivateRoute;
