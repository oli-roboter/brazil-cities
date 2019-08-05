import axios from "axios";
import API_ROUTES from "../api-routes";

export async function getGraphData(fields) {
  const jsonFields = JSON.stringify(fields);
  const url = `${API_ROUTES.GRAPHS}graph/${jsonFields}`;
  try {
    return await axios.get(url, {
      params: jsonFields
    });
  } catch (err) {
    console.error(`${err.message}! ${err.response.data.err}`);
    return err;
  }
}
