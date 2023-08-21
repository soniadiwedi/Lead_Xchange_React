import React, { useState } from "react";
import "./AdminDashboard.css";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";

function AdminDashboard({ user, funcNav, funcFooter }) {
  funcNav(false);
  funcFooter(false);

  const [showNavbar, setShowNavbar] = useState(false);
  let classes = "height-100 pt-3";
  if (showNavbar) classes += " body-pd";

  return (
    <>
      <div className="dashboard">
        <Navbar user={user} />
        <BottomNavbar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        <div className={classes}>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
