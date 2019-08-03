import { GRAPH_ACTION_TYPES } from "./graph-actions";

const defaultState = {
  gotData: false,
  data: [],
  filterArr: "",
  error: false,
  errorMsg: ""
};

export default function graphReducer(state = defaultState, action) {
  switch (action.type) {
    case GRAPH_ACTION_TYPES.GET_ALL:
      return {
        ...state,
        gotData: false
      };

    case GRAPH_ACTION_TYPES.GOT_ALL:
      return {
        ...state,
        gotData: true,
        error: false,
        errorMsg: false,
        data: action.payload.data
      };

    case GRAPH_ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        error: true,
        errorMsg: action.payload.errorMsg.message
      };

    default:
      return state;
  }
}
