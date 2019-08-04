export const getGVAperState = fields => {
  const fieldsConverter = {
    GVA_AGROPEC: ["SUM(GVA_AGROPEC)/SUM(IBGE_RES_POP) AS farming", "farming"],
    GVA_INDUSTRY: [
      "SUM(GVA_INDUSTRY)/SUM(IBGE_RES_POP) AS industry",
      "industry"
    ],
    GVA_SERVICES: [
      "SUM(GVA_SERVICES)/SUM(IBGE_RES_POP) AS services",
      "services"
    ],
    GVA_PUBLIC: ["SUM(GVA_PUBLIC)/SUM(IBGE_RES_POP) AS public", "public"]
  };

  const fieldsArr = fields.split(",");
  const selectSQL = fieldsArr.map(f => fieldsConverter[f][0]).join();
  const orderSQL = fieldsArr.map(f => fieldsConverter[f][1]).join("+");

  return `
  SELECT
  STATE,
  ${selectSQL}
  FROM cities
  GROUP BY
  STATE
  ORDER BY (${orderSQL}) DESC
  `;
};

/*
SELECT 
cities.STATE,
      SUM(cities.GVA_AGROPEC)/total2.totalGVA AS farming,
SUM(cities.GVA_INDUSTRY)/SUM(cities.IBGE_RES_POP) AS industry
FROM 
(
  SELECT 
    SUM(GVA_AGROPEC + GVA_INDUSTRY) AS totalGVA
  FROM cities
) AS total2,  
cities
GROUP BY 
cities.STATE
ORDER BY (industry+farming) DESC
*/
