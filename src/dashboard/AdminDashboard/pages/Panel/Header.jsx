import React from "react";

function Header() {
  return (
    <>
      <div className="row total-campaging">
        <div className="col-md-4">
          <div className="total-box-top">
            <div className="total-box-camp">
              <h4>Total Campaign Listing</h4>
              <p>Number of campaign listing</p>
              <span className="cnt-number">54</span>
              <div className="prgs-lbl d-flex justify-content-between w-100 mt-auto mb-2">
                <span className=" ">1,048 to Goal</span>
                <span className="">62%</span>
              </div>
              <div className="progress " style={{ height: "10px" }}>
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="total-box-top">
            <div
              className="total-box-camp total-box-camp1"
              style={{ backgroundColor: "#F7A600" }}
            >
              <h5>Your Credit</h5>
              <div className="buy-box d-flex">
                <h3>453</h3>
                <h6>Buy Credit</h6>
              </div>
              <div className="progress " style={{ height: "10px" }}>
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="total-box-top">
            <div
              className="total-box-camp total-box-camp1"
              style={{ backgroundColor: "#000000" }}
            >
              <h5>Total Reach</h5>
              <div className="buy-box d-flex">
                <h3>453</h3>
                <h2>Get more Reach</h2>
              </div>
              <div className="progress " style={{ height: "10px" }}>
                <div className="progress-bar" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
