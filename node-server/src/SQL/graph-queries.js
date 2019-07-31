export const getGVAperState = () => {
  // const fields =
  //   "GVA_AGROPEC GVA_INDUSTRY GVA_SERVICES GVA_PUBLIC GVA_TOTAL";
  console.log("ENTROU NA GRAPH QUERY");
  return `
    SELECT 
      STATE,
      SUM(GVA_AGROPEC) AS farming,
      SUM(GVA_INDUSTRY) AS industry,
      SUM(GVA_SERVICES) AS services,
      SUM(GVA_PUBLIC) AS public,
      SUM(GVA_TOTAL) AS total,
      SUM(GVA_AGROPEC + GVA_INDUSTRY + GVA_SERVICES + GVA_PUBLIC) as sumOfGVA
    FROM cities
    GROUP BY 
      STATE
  `;
};
