import { getFilteredSorted } from "../../../database-functions/table-functions";

export const TABLE_ACTION_TYPES = {
  GET_ALL: "CITIES/GET_ALL",
  GOT_ALL: "CITIES/GOT_ALL"
  // SET_PAGE: "CITIES/SET_PAGE",
  // SET_PAGE_OK: "CITIES/SET_PAGE_OK",
  // SET_PAGESIZE: "CITIES/SET_PAGESIZE",
  // SET_PAGESIZE_OK: "CITIES/SET_PAGESIZE_OK"
};

export function sortFilterState(sortColumn, state) {
  return async dispatch => {
    dispatch({ type: TABLE_ACTION_TYPES.GET_ALL });
    const data = await getFilteredSorted(sortColumn, state);
    return dispatch({
      type: TABLE_ACTION_TYPES.GOT_ALL,
      payload: { data }
    });
  };
}

// export function setPageNumber(str, page, pageSize, orderBy, order) {
//   return dispatch => {
//     dispatch({ type: TABLE_ACTION_TYPES.SET_PAGE, payload: { page } });
//     const returnData = "getTableData(str, page, pageSize, orderBy, order);";
//     const tableData = returnData.dataInPage;
//     return setTimeout(
//       () =>
//         dispatch({
//           type: TABLE_ACTION_TYPES.SET_PAGE_OK,
//           payload: { tableData }
//         }),
//       200
//     );
//   };
// }

// export function setRowsPerPage(str, page, rowsPerPage, orderBy, order) {
//   return dispatch => {
//     dispatch({
//       type: TABLE_ACTION_TYPES.SET_PAGESIZE,
//       payload: { rowsPerPage }
//     });
//     const returnData = "getTableData(str, page, rowsPerPage, orderBy, order);";
//     const tableData = returnData.dataInPage;
//     return setTimeout(
//       () =>
//         dispatch({
//           type: TABLE_ACTION_TYPES.SET_PAGESIZE_OK,
//           payload: { tableData }
//         }),
//       200
//     );
//   };
// }
