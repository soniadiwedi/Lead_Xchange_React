import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import InvestorsTable  from "./InvestorsTable ";


const InvestorsList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <InvestorsTable />
      </div>
    </>
  );
};

export default InvestorsList;
