import axios from "axios";
import API_ROUTES from "../api-routes";

export async function getGraphData() {
  console.log("graph function init");
  const url = `${API_ROUTES.GRAPHS}`;
  try {
    return await axios.get(url);
  } catch (err) {
    console.error(`${err.message}! ${err.response.data.err}`);
  }
}
