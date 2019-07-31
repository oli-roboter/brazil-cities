import { GRAPH_ACTION_TYPES } from "./graph-actions";

const defaultState = {
  gotData: false,
  data: [],
  filterArr: ""
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
        data: action.payload.data
      };

    default:
      return state;
  }
}
