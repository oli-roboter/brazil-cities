import { TABLE_ACTION_TYPES } from "./table-actions";

const defaultState = {
  pageSize: 10,
  totalRows: 0,
  gotData: false,
  pageNum: 0,
  pageData: [],
  sortBy: null,
  sortOrder: "asc",
  filterDisplay: ""
};

export default function tableReducer(state = defaultState, action) {
  switch (action.type) {
    case TABLE_ACTION_TYPES.GET_ALL:
      return {
        ...state,
        gotData: false
      };

    case TABLE_ACTION_TYPES.GOT_ALL:
      return {
        ...state,
        gotData: true,
        pageData: action.payload.data,
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder,
        totalRows: action.payload.totalRows,
        filterStr: action.payload.filterStr,
        pageNum: action.payload.pageNum,
        pageSize: action.payload.pageSize
      };

    case TABLE_ACTION_TYPES.SET_PAGE:
      return {
        ...state,
        gotWorkers: false,
        pageNum: action.payload.pageNum
      };

    case TABLE_ACTION_TYPES.SET_PAGE_OK:
      return {
        ...state,
        gotWorkers: true,
        pageData: action.payload.data
      };

    case TABLE_ACTION_TYPES.SET_PAGESIZE:
      return {
        ...state,
        gotWorkers: false,
        pageSize: action.payload.pageSize
      };

    case TABLE_ACTION_TYPES.SET_PAGESIZE_OK:
      return {
        ...state,
        gotWorkers: true,
        pageData: action.payload.data
      };

    default:
      return state;
  }
}
