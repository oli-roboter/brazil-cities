import { tableHeadersArr } from "../database/table-headers";

export const getTableData = (filter, sortBy, sortOrder, pageNum, pageSize) => {
  const fields =
    "CITY, STATE, CAPITAL, AREA, ESTIMATED_POP, GDP, IDHM, RURAL_URBAN";
  const startPage = pageSize * (pageNum - 1);

  return `
  SELECT ${fields}
  FROM cities
  ${filter}
  ORDER BY ${sortBy} ${sortOrder.toUpperCase()}
  LIMIT ${startPage}, ${pageSize}
  `;
};

export const getTotalRows = filter => {
  return `
    SELECT COUNT(CITY) AS TotalRows
    FROM cities
    ${filter}
  `;
};
