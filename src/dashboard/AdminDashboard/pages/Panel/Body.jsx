import React from "react";
import circle from "../../../../assets/images/dashboard/circle.svg";
import { FaChartLine, FaRegBookmark } from "react-icons/fa";
import { RiVipDiamondFill } from "react-icons/ri";

function Body() {
  return (
    <>
      <div className="row">
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-danger card-img-holder text-white">
            <div className="card-body">
              <img
                src={circle}
                className="card-img-absolute"
                alt="circle-image "
              />
              <h4 className="font-weight-normal mb-3">
                Weekly Sales <FaChartLine size={25} className="float-right" />
              </h4>
              <h2 className="mb-5">$ 15,0000</h2>
              <h6 className="card-text">Increased by 60%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-info card-img-holder text-white">
            <div className="card-body">
              <img
                src={circle}
                className="card-img-absolute"
                alt="circle-image "
              />
              <h4 className="font-weight-normal mb-3">
                Weekly Orders
                <FaRegBookmark size={25} className="float-right" />
              </h4>
              <h2 className="mb-5">45,6334</h2>
              <h6 className="card-text">Decreased by 10%</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4 stretch-card grid-margin">
          <div className="card bg-gradient-success card-img-holder text-white">
            <div className="card-body">
              <img
                src={circle}
                className="card-img-absolute"
                alt="circle-image "
              />
              <h4 className="font-weight-normal mb-3">
                Visitors Online{" "}
                <RiVipDiamondFill size={25} className="float-right" />
              </h4>
              <h2 className="mb-5">95,5741</h2>
              <h6 className="card-text">Increased by 5%</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
