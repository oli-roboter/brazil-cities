import { getGraphData } from "../../../database-functions/graph-functions";

export const GRAPH_ACTION_TYPES = {
  GET_ALL: "GRAPH/GET_ALL",
  GOT_ALL: "GRAPH/GOT_ALL"
};

export function getGVAData() {
  console.log("action dispatched");
  return async dispatch => {
    dispatch({ type: GRAPH_ACTION_TYPES.GET_ALL });
    const res = await getGraphData();
    console.log("result from action:", res);
    return dispatch({
      type: GRAPH_ACTION_TYPES.GOT_ALL,
      payload: {
        data: res.data.result
      }
    });
  };
}
