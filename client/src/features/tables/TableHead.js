import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesData } from "./redux-tools/table-actions";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const mapStateToProps = state => {
  return {
    pageNum: state.tableStore.pageNum,
    pageSize: state.tableStore.pageSize,
    sortBy: state.tableStore.sortBy,
    sortOrder: state.tableStore.sortOrder,
    filterStr: state.tableStore.filterStr
  };
};

const CustomTableHead = props => {
  const { filterStr, sortOrder, sortBy, pageSize, pageNum } = props;

  const setOrder = (sortOrder, sortBy, property) => {
    console.log("setOrder", sortOrder, sortBy, property);
    if (sortOrder === undefined) {
      return "asc";
    } else {
      return sortBy !== property
        ? sortOrder
        : sortOrder === "asc"
        ? "desc"
        : "asc";
    }
  };

  const sortHandler = property => event => {
    const newOrder = setOrder(sortOrder, sortBy, property);
    // console.log(newOrder, pageNum, pageSize, property);
    props.getCitiesData(property, newOrder, pageNum, pageSize, filterStr);
  };

  // console.log("render TableHead:", sortOrder, sortBy, pageNum);
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">
          <TableSortLabel
            active={sortBy === "CITY"}
            direction={sortOrder}
            onClick={sortHandler("CITY")}
          >
            City
          </TableSortLabel>
        </TableCell>

        <TableCell align="left">State</TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "ESTIMATED_POP" ? sortOrder : false}
        >
          <TableSortLabel
            active={sortBy === "ESTIMATED_POP"}
            direction={sortOrder}
            onClick={sortHandler("ESTIMATED_POP")}
          >
            Population
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "AREA" ? sortOrder : false}
        >
          <TableSortLabel
            active={sortBy === "AREA"}
            direction={sortOrder}
            onClick={sortHandler("AREA")}
          >
            {"Area KM \xB2"}
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "GDP" ? sortOrder : false}
        >
          <TableSortLabel
            active={sortBy === "GDP"}
            direction={sortOrder}
            onClick={sortHandler("GDP")}
          >
            GDP in R$ '000
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "IDHM" ? sortOrder : false}
        >
          <TableSortLabel
            active={sortBy === "IDHM"}
            direction={sortOrder}
            onClick={sortHandler("IDHM")}
          >
            HDI
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="left"
          sortDirection={sortBy === "AREA" ? sortOrder : false}
        >
          Rural/Urban
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getCitiesData
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CustomTableHead);
