import { combineReducers } from "redux";
import tableStore from "./features/tables/redux-tools/table-reducer";
// import graphStore from "./features/graphs/graph-reducer";

const allReducers = combineReducers({
  tableStore
});

export default allReducers;
