import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({columns, onSort, sortColumn, data}) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
