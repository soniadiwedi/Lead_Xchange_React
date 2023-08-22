import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import ManageTable from "./ManageTable";


const ManageList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <ManageTable />
      </div>
    </>
  );
};

export default ManageList;
