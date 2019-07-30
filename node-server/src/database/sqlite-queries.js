export const getTableData = (filter, sortBy, pageNum, pageSize) => {
  const fields =
    "CITY, STATE, CAPITAL, AREA, ESTIMATED_POP, GDP, IDHM, RURAL_URBAN";
  const startPage = pageSize * (pageNum - 1);

  return `
  SELECT ${fields}
  FROM cities
  ${filter}
  ${sortBy}
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
