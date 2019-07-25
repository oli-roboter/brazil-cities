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
    currentPage: state.tableStore.currentPage,
    pageSize: state.tableStore.pageSize,
    sortBy: state.tableStore.sortBy,
    sort: state.tableStore.sort,
    filterDisplay: state.tableStore.filterDisplay
  };
};

const CustomTableHead = props => {
  const { filterDisplay, sort, sortBy, pageSize, currentPage } = props;

  const setOrder = (sort, sortBy, property) => {
    if (sort === undefined) {
      return "asc";
    } else {
      return sortBy !== property ? sort : sort === "asc" ? "desc" : "asc";
    }
  };

  const sortHandler = property => event => {
    const newOrder = setOrder(sort, sortBy, property);
    props.getCitiesData(
      filterDisplay,
      currentPage,
      pageSize,
      property,
      newOrder
    );
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell align="left">City</TableCell>

        <TableCell align="left">State</TableCell>

        <TableCell align="center">Capital</TableCell>

        <TableCell
          align="center"
          sortDirection={sortBy === "ESTIMATED_POP" ? sort : false}
        >
          <TableSortLabel
            active={sortBy === "ESTIMATED_POP"}
            direction={sort}
            onClick={sortHandler("ESTIMATED_POP")}
          >
            Population
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="center"
          style={{ width: 250 }}
          sortDirection={sortBy === "AREA" ? sort : false}
        >
          <TableSortLabel
            active={sortBy === "AREA"}
            direction={sort}
            onClick={sortHandler("AREA")}
          >
            {"Area KM \xB2"}
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="center"
          style={{ width: 250 }}
          sortDirection={sortBy === "GDP" ? sort : false}
        >
          <TableSortLabel
            active={sortBy === "GDP"}
            direction={sort}
            onClick={sortHandler("GDP")}
          >
            GDP in R$
          </TableSortLabel>
        </TableCell>

        <TableCell
          align="center"
          style={{ width: 250 }}
          sortDirection={sortBy === "IDHM" ? sort : false}
        >
          HDI
        </TableCell>

        <TableCell
          align="center"
          style={{ width: 250 }}
          sortDirection={sortBy === "AREA" ? sort : false}
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
