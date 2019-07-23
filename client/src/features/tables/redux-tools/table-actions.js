export const TABLE_ACTION_TYPES = {
  GET_ALL: "CITIES/GET_ALL",
  GOT_ALL: "CITIES/GOT_ALL",
  SET_PAGE: "CITIES/SET_PAGE",
  SET_PAGE_OK: "CITIES/SET_PAGE_OK",
  SET_PAGESIZE: "CITIES/SET_PAGESIZE",
  SET_PAGESIZE_OK: "CITIES/SET_PAGESIZE_OK"
};

export function getWorkerData(str, currentPage, pageSize, orderBy, order) {
  return dispatch => {
    dispatch({ type: TABLE_ACTION_TYPES.GET_ALL });
    const returnData =
      "getTableData(str, currentPage, pageSize, orderBy, order);";
    const tableData = returnData.dataInPage;
    const totalRows = returnData.dataLength;
    return setTimeout(
      () =>
        dispatch({
          type: TABLE_ACTION_TYPES.GOT_ALL,
          payload: {
            tableData,
            totalRows,
            pageSize,
            orderBy,
            order,
            str,
            currentPage
          }
        }),
      200
    );
  };
}

export function setPageNumber(str, page, pageSize, orderBy, order) {
  return dispatch => {
    dispatch({ type: TABLE_ACTION_TYPES.SET_PAGE, payload: { page } });
    const returnData = "getTableData(str, page, pageSize, orderBy, order);";
    const tableData = returnData.dataInPage;
    return setTimeout(
      () =>
        dispatch({
          type: TABLE_ACTION_TYPES.SET_PAGE_OK,
          payload: { tableData }
        }),
      200
    );
  };
}

export function setRowsPerPage(str, page, rowsPerPage, orderBy, order) {
  return dispatch => {
    dispatch({
      type: TABLE_ACTION_TYPES.SET_PAGESIZE,
      payload: { rowsPerPage }
    });
    const returnData = "getTableData(str, page, rowsPerPage, orderBy, order);";
    const tableData = returnData.dataInPage;
    return setTimeout(
      () =>
        dispatch({
          type: TABLE_ACTION_TYPES.SET_PAGESIZE_OK,
          payload: { tableData }
        }),
      200
    );
  };
}
