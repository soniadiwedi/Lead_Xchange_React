import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import AwardsTable from "./AwardsTable";

const AwardsList = () => {
  return (
    <>
      <Filter />
      <div className="card">
        <Header />
        <AwardsTable />
      </div>
    </>
  );
};

export default AwardsList;
