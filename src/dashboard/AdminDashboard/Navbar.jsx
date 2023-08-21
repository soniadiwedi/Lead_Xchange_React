import React from "react";
import logo from "../../assets/images/logo.png";
import profile from "../../assets/images/profile.png";

const Navbar = () => {
  return (
    <>
      <header className="header" id="header">
        <a href="#" className="nav_logo">
          <span className="nav_logo-name">
            <img src={logo} alt="logo.png" />
          </span>
          <h4>Dashboard </h4>
        </a>
        <div className="ast-sch">
          <div className="input-group">
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
        <div className="porfile-ntfc d-flex">
          <div className="wells-ntf">
            <i className="fa fa-th-large" aria-hidden="true"></i>
            <i className="fa fa-bar-chart" aria-hidden="true"></i>
            <i className="fa fa-comments" aria-hidden="true"></i>
          </div>
          <div className="sltc-imgss">
            <select
              className="form-select "
              aria-label=".form-select-lg example"
            >
              <option selected="">Admin</option>
            </select>
            <img src={profile} alt="profile.png" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
