import React from "react";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import CustomTableHead from "./TableHead";
import TableMain from "./TableMain";
import Paginator from "./Paginator";
import "./tables.css";

const TableRoot = () => {
  //to do -> add header with add city button and modal to insert new city
  return (
    <div className="table-root">
      <h3>Brazilian Cities' Table</h3>
      <Paper>
        <Table>
          <CustomTableHead />
          <TableMain />
        </Table>
      </Paper>
      <Paginator />
    </div>
  );
};
export default TableRoot;
