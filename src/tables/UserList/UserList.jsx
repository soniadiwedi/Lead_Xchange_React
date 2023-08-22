import React from "react";
import Filter from "./Filter";
import UserTable from "./UserTable";
import Header from "./Header";

const UserList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <UserTable />
      </div>
    </>
  );
};

export default UserList;
