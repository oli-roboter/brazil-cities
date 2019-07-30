import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesData } from "./redux-tools/table-actions";
import NumberFormat from "react-number-format";
import { TableCell, TableRow, TableBody } from "@material-ui/core";
import "./tables.css";

const mapStateToProps = state => {
  return {
    gotData: state.tableStore.gotData,
    pageData: state.tableStore.pageData
  };
};

const TableMain = ({ gotData, pageData, getCitiesData }) => {
  useEffect(() => {
    getCitiesData("", "asc", 1, 10, "");
  }, []);

  return (
    <TableBody>
      <Fragment>
        {!gotData && (
          <TableRow key={1}>
            <TableCell component="th" scope="row">
              loading
            </TableCell>
          </TableRow>
        )}
        {gotData &&
          pageData.map((city, idx) => (
            <TableRow
              key={idx}
              className={city.CAPITAL === 1 ? "table-row" : ""}
            >
              <TableCell component="th" scope="row">
                {city.CITY}
              </TableCell>
              <TableCell component="th" scope="row">
                {city.STATE}
              </TableCell>

              <TableCell component="th" scope="row">
                <NumberFormat
                  value={city.ESTIMATED_POP}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>
              <TableCell component="th" scope="row">
                <NumberFormat
                  value={Math.round(city.AREA)}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>

              <TableCell component="th" scope="row">
                <NumberFormat
                  value={Math.round(city.GDP)}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>

              <TableCell component="th" scope="row">
                <NumberFormat
                  value={city.IDHM !== "" ? city.IDHM.toFixed(3) : null}
                  thousandSeparator={true}
                  displayType={"text"}
                />
              </TableCell>

              <TableCell component="th" scope="row">
                {city.RURAL_URBAN}
              </TableCell>
            </TableRow>
          ))}
      </Fragment>
    </TableBody>
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
)(TableMain);
