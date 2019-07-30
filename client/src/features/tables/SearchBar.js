import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getCitiesData } from "./redux-tools/table-actions";
import Paper from "@material-ui/core/Paper";
import { InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./tables.css";

const mapStateToProps = state => {
  return {
    pageNum: state.tableStore.pageNum,
    pageSize: state.tableStore.pageSize,
    sortBy: state.tableStore.sortBy,
    sortOrder: state.tableStore.sortOrder
  };
};

const SearchBar = props => {
  const { sortOrder, sortBy, pageSize } = props;

  const handleChange = e =>
    props.getCitiesData(sortBy, sortOrder, 0, pageSize, e.target.value);

  return (
    <Paper className="search" elevation="1">
      <InputBase
        className="input"
        placeholder="Search City"
        onChange={handleChange}
      />
      <IconButton aria-label="search" className="icon">
        <SearchIcon />
      </IconButton>
    </Paper>
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
)(SearchBar);
