import React from "react";
import dark from "../../assets/images/logo.png";
import "./Admin.css";
import { AdminForm } from "../../forms";
import { Navigate } from "react-router-dom";

function Admin({ funcNav, funcFooter, user }) {
  funcNav(false);
  funcFooter(true);
  if (user && user?.department_name === "Admin")
    return <Navigate to={`/admin_panel`} replace />;

  return (
    <>
      <section className="sales">
        <div className="container-fluid ps-0 pe-0 salesi">
          <div className="row">
            <div className="col-md-6 sales-left1">
              <div className="sales-left">
                <img src={dark} alt="dark.png" />
                {/* Login Form */}
                <AdminForm />
              </div>
            </div>
            <div className="col-md-6 sales-right1">
              <div className="sales-right">
                <img className="sales-rights" alt="sales-rights" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
