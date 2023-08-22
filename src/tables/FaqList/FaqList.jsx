import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import FaqTable from './FaqTable';


const FaqList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <FaqTable />
      </div>
    </>
  );
};

export default FaqList;
