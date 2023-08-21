import React, { useState, useEffect } from "react";
import { ToastContainer, ToastContent, toast } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";

// Style CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/style.css";
import "../assets/css/main.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

// Authentication
import auth from "../services/authServices";

// Public Pages
import { Home, Signin, Signup, Error, Admin } from "./../pages/";

// Admin Pages
import { Panel as AdminPanel } from "../dashboard/AdminDashboard/pages";

// Dashboard Pages
import { AdminDashboard } from "../dashboard";

// Public Component
import { Footer, Navbar } from "./../components/";
import Logout from "../common/logout";
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";
import { Jobs } from "../pages/Jobs/Jobs";
import { News } from "../pages/News/News";

function RootNavigation() {
  const [user, setUser] = useState(null);
  const [showNav, setShowNav] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const currentUser = auth.getCurrentUser();
    setUser(currentUser);
  }, []);

  return (
    <>
      <ToastContainer />
      {showNav && <Navbar />}
      <Routes>
        {/* Authenication Pages */}
        <Route
          path="/admin_login"
          element={
            <Admin
              user={user}
              funcNav={setShowNav}
              funcFooter={setShowFooter}
            />
          }
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />

        {/* Public Routes Started */}
        <Route
          path="/"
          element={<Home funcNav={setShowNav} funcFooter={setShowFooter} />}
        />
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/news" element={<News/>}/>
        {/* Public Routes Ended */}

        {/* Admin Routes Started*/}
        <Route
          path="/admin_panel"
          element={
            <AdminPrivateRoute
              user={user}
              department={user?.department_name}
              Component={AdminDashboard} // Pass the reference to the component, not the JSX element
              funcNav={setShowNav}
              funcFooter={setShowFooter}
            />
          }
        >
          {" "}
          <Route index element={<AdminPanel />} />
        </Route>
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default RootNavigation;
