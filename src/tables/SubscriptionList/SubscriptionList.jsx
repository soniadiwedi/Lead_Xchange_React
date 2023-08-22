import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import SubscriptionTable from "./SubscriptionTable";


const SubscriptionList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <SubscriptionTable />
      </div>
    </>
  );
};

export default SubscriptionList;
