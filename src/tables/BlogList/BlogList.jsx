import React from "react";
import Filter from "./Filter";

import Header from "./Header";
import BlogsTable from './BlogsTable';


const BlogList = () => {
  return (
    <>
      <Filter />
      <div class="card">
        <Header />
        <BlogsTable />
      </div>
    </>
  );
};

export default BlogList;
