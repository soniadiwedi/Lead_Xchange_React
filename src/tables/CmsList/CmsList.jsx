import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import CmsTable from "./CmsTable";

const CmsList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <CmsTable />
      </div>
    </>
  );
};

export default CmsList;
