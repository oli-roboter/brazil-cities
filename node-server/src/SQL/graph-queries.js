import { makeSQLStringIfTrue } from "../utils/helper-functions";

export const getGVAperState = fields => {
  const fieldsConverter = {
    GVA_AGROPEC: {
      select: "SUM(GVA_AGROPEC)/SUM(IBGE_RES_POP) AS farming",
      order: "farming"
    },
    GVA_INDUSTRY: {
      select: "SUM(GVA_INDUSTRY)/SUM(IBGE_RES_POP) AS industry",
      order: "industry"
    },
    GVA_SERVICES: {
      select: "SUM(GVA_SERVICES)/SUM(IBGE_RES_POP) AS services",
      order: "services"
    },
    GVA_PUBLIC: {
      select: "SUM(GVA_PUBLIC)/SUM(IBGE_RES_POP) AS public",
      order: "public"
    }
  };

  const selectSQL = makeSQLStringIfTrue(fields, fieldsConverter, "select", ",");
  const orderSQL = makeSQLStringIfTrue(fields, fieldsConverter, "order", "+");

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
