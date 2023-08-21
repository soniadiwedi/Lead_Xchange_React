import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, data }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <TableHeader columns={columns} />
        <TableBody columns={columns} data={data} />
      </table>
    </div>
  );
};

export default Table;
