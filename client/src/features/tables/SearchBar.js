import React from "react";
import Paper from "@material-ui/core/Paper";
import { InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./tables.css";

const SearchBar = () => (
  <Paper className="search">
    <InputBase className="input" placeholder="Search City" />
    <IconButton aria-label="search" className="icon">
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default SearchBar;
