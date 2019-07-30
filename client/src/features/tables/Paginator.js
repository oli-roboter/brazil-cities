import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setPageNumber, setRowsPerPage } from "./redux-tools/table-actions";
import TablePagination from "@material-ui/core/TablePagination";

const mapStateToProps = state => {
  return {
    pageNum: state.tableStore.pageNum,
    pageSize: state.tableStore.pageSize,
    totalRows: state.tableStore.totalRows,
    sortBy: state.tableStore.sortBy,
    sortOrder: state.tableStore.sortOrder,
    filterStr: state.tableStore.filterStr
  };
};

const Paginator = props => {
  console.log();

  const { filterStr, totalRows, pageNum, pageSize, sortOrder, sortBy } = props;

  const handleChangePage = (e, newPage) => {
    props.setPageNumber(sortBy, sortOrder, newPage, pageSize, filterStr);
  };

  const handleChangeRowsPerPage = e => {
    props.setRowsPerPage(
      sortBy,
      sortOrder,
      adjustPage(totalRows, e.target.value, pageNum),
      e.target.value,
      filterStr
    );
  };

  function adjustPage(totalRows, pageSize, currentPageNum) {
    return currentPageNum > Math.ceil(totalRows / pageSize)
      ? Math.floor(totalRows / pageSize)
      : currentPageNum;
  }

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 100, 200]}
      component="div"
      count={totalRows}
      rowsPerPage={pageSize}
      page={pageNum}
      backIconButtonProps={{
        "aria-label": "Previous Page"
      }}
      nextIconButtonProps={{
        "aria-label": "Next Page"
      }}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setPageNumber,
      setRowsPerPage
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Paginator);
