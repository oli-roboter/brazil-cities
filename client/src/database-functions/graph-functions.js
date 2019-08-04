import axios from "axios";
import API_ROUTES from "../api-routes";

export async function getGraphData(fieldsArr) {
  console.log("graph function init", fieldsArr);

  const url = `${API_ROUTES.GRAPHS}graph/${fieldsArr}`;
  try {
    return await axios.get(url, {
      params: { fieldsArr }
    });
  } catch (err) {
    console.error(`${err.message}! ${err.response.data.err}`);
    return err;
  }
}
