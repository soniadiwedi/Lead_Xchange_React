import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row pt-3">
        <div className="col-md-12">
          <div className="source-box">
            <div className="source-top d-flex">
              <h3>All Subscription Packages</h3>
              <Link class="btn-bulk" to="new">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
