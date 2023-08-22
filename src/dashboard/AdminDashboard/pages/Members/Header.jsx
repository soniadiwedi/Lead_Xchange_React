import React from "react";

const Header = () => {
  return (
    <>
      <div className="row pt-3">
        <div className="col-md-12">
          <div className="source-box">
            <div className="source-top d-flex">
              <h3>All Team Members</h3>
              <a class="btn-bulk" href="#">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
