import React from "react";
import  Latest  from "./Latest";

const News = ({funcNav, funcFooter}) => {
  funcNav(true);
  funcFooter(true);
  return (
    <>
      <section class="blog-banner">
        <div class="container-fluid">
          <div class="col-md-12">
            <div class="blog-banners" data-aos="fade-right"></div>
          </div>
        </div>
      </section>
      <Latest />
    </>
  );
};

export default News;
