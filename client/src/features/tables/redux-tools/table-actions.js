import { getTableData } from "../../../database-functions/table-functions";

export const TABLE_ACTION_TYPES = {
  GET_ALL: "CITIES/GET_ALL",
  GOT_ALL: "CITIES/GOT_ALL",
  SET_PAGE: "CITIES/SET_PAGE",
  SET_PAGE_OK: "CITIES/SET_PAGE_OK",
  SET_PAGESIZE: "CITIES/SET_PAGESIZE",
  SET_PAGESIZE_OK: "CITIES/SET_PAGESIZE_OK"
};

export function getCitiesData(sortBy, sortOrder, pageNum, pageSize, filterStr) {
  return async dispatch => {
    dispatch({ type: TABLE_ACTION_TYPES.GET_ALL });
    const res = await getTableData(
      sortBy,
      sortOrder,
      pageNum,
      pageSize,
      filterStr
    );
    return dispatch({
      type: TABLE_ACTION_TYPES.GOT_ALL,
      payload: { data: res.data.result }
    });
  };
}

export function setPageNumber(sortBy, sortOrder, pageNum, pageSize, filterStr) {
  return async dispatch => {
    dispatch({ type: TABLE_ACTION_TYPES.SET_PAGE, payload: { pageNum } });
    const returnData = await getTableData(
      sortBy,
      sortOrder,
      pageNum,
      pageSize,
      filterStr
    );
    const tableData = returnData.dataInPage;
    return dispatch({
      type: TABLE_ACTION_TYPES.SET_PAGE_OK,
      payload: { tableData }
    });
  };
}

export function setRowsPerPage(
  sortBy,
  sortOrder,
  pageNum,
  pageSize,
  filterStr
) {
  return async dispatch => {
    dispatch({
      type: TABLE_ACTION_TYPES.SET_PAGESIZE,
      payload: { pageSize }
    });
    const returnData = await getTableData(
      sortBy,
      sortOrder,
      pageNum,
      pageSize,
      filterStr
    );
    const tableData = returnData.dataInPage;
    return dispatch({
      type: TABLE_ACTION_TYPES.SET_PAGESIZE_OK,
      payload: { tableData }
    });
  };
}
