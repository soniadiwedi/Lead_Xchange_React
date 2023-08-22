import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import MembersTable from "./MembersTable";


const MembersList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <MembersTable />
      </div>
    </>
  );
};

export default MembersList;
