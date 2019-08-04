import { getGraphData } from "../../../database-functions/graph-functions";

export const GRAPH_ACTION_TYPES = {
  GET_ALL: "GRAPH/GET_ALL",
  GOT_ALL: "GRAPH/GOT_ALL",
  SET_ERROR: "GRAPH/SET_ERROR"
};

export function getGVAData(fieldsArr) {
  return async dispatch => {
    dispatch({ type: GRAPH_ACTION_TYPES.GET_ALL });
    const res = await getGraphData(fieldsArr);

    try {
      return dispatch({
        type: GRAPH_ACTION_TYPES.GOT_ALL,
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
