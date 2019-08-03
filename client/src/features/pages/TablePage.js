import React from "react";
import { Table, Paper } from "@material-ui/core";
import CustomTableHead from "../tables/TableHead";
import TableMain from "../tables/TableMain";
import Paginator from "../tables/Paginator";
import SearchBar from "../tables/SearchBar";
import "../tables/tables.css";

const TablePage = () => {
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
export default TablePage;
