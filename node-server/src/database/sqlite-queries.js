export const getTableData = (filter, sortBy, pageNum, pageSize) => {
  console.log(pageNum);
  const fields =
    "CITY, STATE, CAPITAL, AREA, ESTIMATED_POP, GDP, IDHM, RURAL_URBAN";
  const pageStart = pageSize * pageNum;

  return `
  SELECT ${fields}
  FROM cities
  ${filter}
  ${sortBy}
  LIMIT ${pageStart}, ${pageSize}
  `;
};

export const getTotalRows = filter => {
  return `
    SELECT COUNT(CITY) AS TotalRows
    FROM cities
    ${filter}
  `;
};
