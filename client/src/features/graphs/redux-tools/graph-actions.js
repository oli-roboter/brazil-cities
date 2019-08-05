import { getGraphData } from "../../../database-functions/graph-functions";

export const GRAPH_ACTION_TYPES = {
  GET_GVA: "GRAPH/GET_GVA",
  GOT_GVA: "GRAPH/GOT_GVA",
  SET_ERROR: "GRAPH/SET_ERROR",
  SET_GVA_FIELD: "GRAPH/SET_GVA_FIELD",
  SET_GVA_FIELD_OK: "GRAPH/SET_GVA_FIELD_OK"
};

export function getGVAData(fieldsArr) {
  return async dispatch => {
    dispatch({ type: GRAPH_ACTION_TYPES.GET_GVA });
    const res = await getGraphData(fieldsArr);

    try {
      return dispatch({
        type: GRAPH_ACTION_TYPES.GOT_GVA,
        payload: {
          data: res.data.result
        }
      });
    } catch (error) {
      return dispatch({
        type: GRAPH_ACTION_TYPES.SET_ERROR,
        payload: { errorMsg: res }
      });
    }
  };
}

export function setFields(fields) {
  return async dispatch => {
    dispatch({ type: GRAPH_ACTION_TYPES.SET_GVA_FIELD, payload: { fields } });
    const res = await getGraphData(fields);

    try {
      return dispatch({
        type: GRAPH_ACTION_TYPES.SET_GVA_FIELD_OK,
        payload: {
          data: res.data.result
        }
      });
    } catch (error) {
      return dispatch({
        type: GRAPH_ACTION_TYPES.SET_ERROR,
        payload: { errorMsg: res }
      });
    }
  };
}
