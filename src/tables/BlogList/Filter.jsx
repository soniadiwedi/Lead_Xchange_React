import React from "react";
import SearchBox from "../../common/searchBox";

const Filter = () => {
  return (
    <>
      <div class="row pt-3">
        <div class="col-md-12">
          <div class="source-box">
            <div class="filters-box d-flex">
              <div class="filters-box-left">
                <ul class="">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Filters<i class="fa fa-filter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Status active X
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Status pending X
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Status accepted X
                    </a>
                  </li>
                </ul>
              </div>
              <div class="filters-box-right">
                <div class="ast-schs">
                  <SearchBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
