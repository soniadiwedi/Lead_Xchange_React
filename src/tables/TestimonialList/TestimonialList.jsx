import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import TestimonialTable from "./TestimonialTable";


const TestimonialList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <TestimonialTable />
      </div>
    </>
  );
};

export default TestimonialList;
