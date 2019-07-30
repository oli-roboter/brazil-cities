import React from "react";
import { Table, Paper } from "@material-ui/core";
import CustomTableHead from "./TableHead";
import TableMain from "./TableMain";
import Paginator from "./Paginator";
import SearchBar from "./SearchBar";
import "./tables.css";

const TableRoot = () => {
  //to do -> add header with add city button and modal to insert new city
  return (
    <div className="table-root">
      <header>
        <h3>Brazilian Cities' Table</h3>
        <SearchBar />
      </header>
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
