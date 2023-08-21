import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

import logo from "../../assets/images/logo.png"
const Navbar = ({ user }) => {
  return (
    <>
     <header className="maine-header" id="sticky-top">
         <nav className="navbar navbar-expand-lg lead-menu">
            <div className="container">
               <Link className="navbar-brand">
                <img src={logo} class="img-fluid" alt=""/></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" >Active Lead</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" >Intent Data</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" >Virtual CXOs</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" >Startup </Link>
                     </li>
					 <li className="nav-item">
                        <Link to="/jobs" className="nav-link" >Jobs</Link>
                     </li>
					 <li className="nav-item">
                        <Link  to="/news" className="nav-link" >News</Link>
                     </li>
                    
                  </ul>
                  <div className="d-flex" role="search">
                   
                     <button className="btn btn-sign" type="submit">Login</button>
                  </div>
               </div>
            </div>
         </nav>
      </header>
    </>
  );
};

export default Navbar;
