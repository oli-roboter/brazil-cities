import axios from "axios";
import API_ROUTES from "../api-routes";

export async function getFilteredSorted(sortColumn, filter) {
  console.log("iniciou funcao getFilteredData");
  const url = `${API_ROUTES.CITIES}${sortColumn}/${filter}`;
  try {
    return await axios.get(url, {
      params: {
        sortColumn,
        filter
      }
    });
  } catch (err) {
    console.error("erro front end", err);
  }
}
