import React from "react";
// import { ProjectStatus, TodayList } from "../../../../tables/";

function Project() {
  return (
    <>
      <div className="row">
        <div className="col-md-7 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Project Status</h4>
              {/* Project Table */}
              {/* <ProjectStatus /> */}
            </div>
          </div>
        </div>
        <div className="col-md-5 grid-margin stretch-card">
          {/* <TodayList /> */}
        </div>
      </div>
    </>
  );
}

export default Project;
