import React from "react";
import Filter from "./Filter";
import RequirementTable from "./RequirementTable";
import Header from "./Header";

const RequirementList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <RequirementTable />
      </div>
    </>
  );
};

export default RequirementList;
