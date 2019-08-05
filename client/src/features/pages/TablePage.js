import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Table, Paper } from "@material-ui/core";
import CustomTableHead from "../tables/TableHead";
import TableMain from "../tables/TableMain";
import Paginator from "../tables/Paginator";
import SearchBar from "../tables/SearchBar";
import LoadError from "../../components/LoadError";
import "../tables/Tables.css";

const mapStateToProps = state => {
  return {
    error: state.tableStore.error,
    errorMsg: state.tableStore.errorMsg
  };
};

const TablePage = ({ error, errorMsg }) => {
  return (
    <div className="table-container">
      <header className="f__r-jc--sb">
        <h3>Brazilian Cities' Table</h3>
        <SearchBar />
      </header>

      {error && <LoadError errorMsg={errorMsg} />}

      {!error && (
        <Fragment>
          <Paper>
            <Table>
              <CustomTableHead />
              <TableMain />
            </Table>
          </Paper>
          <Paginator />
        </Fragment>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps
  // matchDispatchToProps
)(TablePage);
