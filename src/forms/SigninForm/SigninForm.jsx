import React, { useState } from "react";
import Joi from "joi-browser";
import "./SigninForm.css";
import Form from "../../common/form";
import auth from "../../services/authServices";
import { toast } from "react-toastify";
import { apiUrl } from "../../config";

function SigninForm() {
  const initialData = { mobile: "", password: "" };
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const employEndpoint = apiUrl + "/employee_signin";

  const doSubmit = async () => {
    // Call the server
    console.log("Submitted", data);
    try {
      await auth.login(
        employEndpoint,
        {
          mobile: data.mobile,
          password: data.password,
        },
        "name",
        "password"
      );
      let redirectUrl = process.env.REACT_APP_liveURL;
      if (process.env.NODE_ENV === "development") {
        redirectUrl = process.env.REACT_APP_localURL;
      }
      window.location.href = redirectUrl;
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        toast.error(ex.response.data.message);
      }
    }
  };

  const schema = {
    mobile: Joi.string()
      .length(10)
      .regex(/^[0-9]+$/)
      .required()
      .label("Mobile is required"),
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
        {renderInput("mobile", "Mobile", "tel")}
        {renderInput("password", "Password", "password")}
        {renderButton("Login")}
        <p>&nbsp;</p>
      </form>
    </>
  );
}

export default SigninForm;
