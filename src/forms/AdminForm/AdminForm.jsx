import React, { useState } from "react";
import Joi from "joi-browser";
import "./AdminForm.css";
import Form from "../../common/form";
import auth from "../../services/authServices";
import { toast } from "react-toastify";
import { apiUrl } from "../../config";
import { useLocation } from "react-router-dom";

function AdminForm() {
  const initialData = { username: "", password: "" };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const adminEndpoint = apiUrl + "/admin_signin";
  const location = useLocation();

  const doSubmit = async () => {
    // Call the server
    console.log("Submitted", data);
    try {
      await auth.login(adminEndpoint, data, "username", "password");
      let redirectUrl = process.env.REACT_APP_liveURL;
      if (process.env.NODE_ENV === "development") {
        redirectUrl = process.env.REACT_APP_localURL;
      }
      let path = location.state
        ? `${redirectUrl}${location.state.history}`
        : `${redirectUrl}/admin_panel`; // No need for type assertion

      window.location.href = path;
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message);
      }
    }
  };

  const schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  const { renderInput, renderButton, handleSubmit } = Form({
    data,
    setData,
    errors,
    setErrors,
    schema,
    onSubmit: doSubmit,
  });
  return (
    <>
      {/* Login Form */}
      <form className="logine" onSubmit={handleSubmit}>
        {renderInput("username", "Username")}
        {renderInput("password", "Password", "password")}
        {renderButton("Login")}
        <p>&nbsp;</p>
      </form>
    </>
  );
}

export default AdminForm;
