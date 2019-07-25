import SQL from "sql-template-strings";
import { tableHeadersArr } from "../database/table-headers";

export const getTableData = (filterBy, sortBy, sortOrder) => {
  return SQL`
    SELECT `
    .append(tableHeadersArr)
    .append(
      SQL`
    FROM cities
    WHERE
    STATE=${filterBy}
    ORDER BY ${sortBy} `.append(sortOrder)
    );
};
