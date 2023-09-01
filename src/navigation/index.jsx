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
import { Home, Signin, Signup, Error, Jobs, News, Admin } from "./../pages/";

// Admin Pages
import {
  Panel as AdminPanel,
  Users,
  Requirement,
  Domain,
  Manage,
  Investors,
  Subscription,
  Cms,
  Members,
  Testimonial,
  Faq,
  Awards,
  Blogs,
  Contact,
} from "../dashboard/AdminDashboard/pages";

// Dashboard Pages
import { AdminDashboard } from "../dashboard";

// Public Component
import { Footer, Navbar } from "./../components/";
import Logout from "../common/logout";
import AdminPrivateRoute from "./PrivateRoute/AdminPrivateRoute";
import {
  AwardsForm,
  BlogsForm,
  CmsForm,
  ContactForm,
  FaqForms,
  InvestorsForm,
  JobsForm,
  MembersForm,
  RequirementsForm,
  SubscriptionForm,
  TestimonialForm,
  UserForm,
} from "../forms";
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
        <Route
          path="/jobs"
          element={<Jobs funcNav={setShowNav} funcFooter={setShowFooter} />}
        />
        <Route
          path="/news"
          element={<News funcNav={setShowNav} funcFooter={setShowFooter} />}
        />
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
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserForm />} />
          <Route path="requirement" element={<Requirement />} />
          <Route path="requirement/:id" element={<RequirementsForm />} />
          <Route path="domain" element={<Domain />} />
          <Route path="domain/:id" element={<Domain />} />
          <Route path="manage" element={<Manage />} />
          <Route path="manage/:id" element={<JobsForm />} />
          <Route path="investors" element={<Investors />} />
          <Route path="investors/:id" element={<InvestorsForm />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="subscription/:id" element={<SubscriptionForm />} />
          <Route path="cms" element={<Cms />} />
          <Route path="cms/:id" element={<CmsForm />} />
          <Route path="members" element={<Members />} />
          <Route path="members/:id" element={<MembersForm />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="testimonial/:id" element={<TestimonialForm />} />
          <Route path="awards" element={<Awards />} />
          <Route path="awards/:id" element={<AwardsForm />} />
          <Route path="faq" element={<Faq />} />
          <Route path="faq/:id" element={<FaqForms />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogsForm />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact/:id" element={<ContactForm />} />
          <Route path="*" element={<Error />} />
        </Route>
        {/* Error Pages */}
        <Route path="*" element={<Error />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default RootNavigation;
