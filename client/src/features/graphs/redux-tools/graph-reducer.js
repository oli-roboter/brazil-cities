import { GRAPH_ACTION_TYPES } from "./graph-actions";

const defaultState = {
  gotData: false,
  data: [],
  fields: {
    GVA_INDUSTRY: true,
    GVA_AGROPEC: true,
    GVA_PUBLIC: true,
    GVA_SERVICES: true
  },
  error: false,
  errorMsg: ""
};

export default function graphReducer(state = defaultState, action) {
  switch (action.type) {
    case GRAPH_ACTION_TYPES.GET_GVA:
      return {
        ...state,
        gotData: false
      };

    case GRAPH_ACTION_TYPES.GOT_GVA:
      return {
        ...state,
        gotData: true,
        error: false,
        errorMsg: false,
        data: action.payload.data
      };

    case GRAPH_ACTION_TYPES.SET_GVA_FIELD:
      return {
        ...state,
        gotData: false,
        fields: action.payload.fields
      };

    case GRAPH_ACTION_TYPES.SET_GVA_FIELD_OK:
      return {
        ...state,
        gotData: true,
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
