export const getGVAperState = () => {
  // const fields =
  //   "GVA_AGROPEC GVA_INDUSTRY GVA_SERVICES GVA_PUBLIC GVA_TOTAL";

  return `
    SELECT 
      STATE,
      SUM(GVA_AGROPEC/1000) AS farming,
      SUM(GVA_INDUSTRY/1000) AS industry,
      SUM(GVA_SERVICES/1000) AS services,
      SUM(GVA_PUBLIC/1000) AS public
    FROM cities
    GROUP BY 
      STATE
    ORDER BY industry DESC
  `;
};

// SUM(GVA_TOTAL) AS total,
// SUM(GVA_AGROPEC + GVA_INDUSTRY + GVA_SERVICES + GVA_PUBLIC) as sumOfGVA
