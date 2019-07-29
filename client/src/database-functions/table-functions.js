import axios from "axios";
import API_ROUTES from "../api-routes";

export async function getTableData(
  sortBy,
  sortOrder,
  pageNum,
  pageSize,
  filterStr
) {
  const queryData = JSON.stringify({
    sortBy,
    sortOrder,
    pageNum,
    pageSize,
    filterStr
  });

  const url = `${API_ROUTES.CITIES}table/${queryData}`;
  try {
    return await axios.get(url, {
      params: {
        queryData
      }
    });
  } catch (err) {
    console.error(`${err.message}! ${err.response.data.err}`);
  }
}
