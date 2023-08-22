import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import ContactTable from "./ContactTable";

const ContactList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <ContactTable />
      </div>
    </>
  );
};

export default ContactList;
