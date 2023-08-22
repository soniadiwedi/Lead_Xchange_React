import React from "react";
import Filter from "./Filter";
import UserTable from "./DomainTable";
import Header from "./Header";
import DomainTable from "./DomainTable";

const DomainList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <DomainTable />
      </div>
    </>
  );
};

export default DomainList;
