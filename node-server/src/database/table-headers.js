// import
/*
List of all available fields in brazil-cities.json
Commented out fields will not be imported into sqlite
*/

export const tableHeaders = {
  CITY: "text",
  STATE: "text",
  CAPITAL: "integer",
  IBGE_RES_POP: "integer",
  IBGE_RES_POP_BRAS: "integer",
  IBGE_RES_POP_ESTR: "integer",
  IBGE_1: "integer",
  IBGE_1_4: "integer",
  IBGE_5_9: "integer",
  IBGE_10_14: "integer",
  IBGE_15_59: "integer",
  IBGE_60_PLUS: "integer",
  IBGE_PLANTED_AREA: "real",
  IBGE_CROP_PRODUCTION_$: "real",
  IDHM_Ranking_2010: "integer",
  IDHM: "real",
  IDHM_Renda: "real",
  IDHM_Longevidade: "real",
  IDHM_Educacao: "real",
  LONG: "Longitude",
  LAT: "Latitude",
  ALT: "real",
  PAY_TV: "integer",
  FIXED_PHONES: "integer",
  AREA: "real",
  REGIAO_TUR: "text",
  CATEGORIA_TUR: "text",
  ESTIMATED_POP: "integer",
  RURAL_URBAN: "text",
  GVA_AGROPEC: "real",
  GVA_INDUSTRY: "real",
  GVA_SERVICES: "real",
  GVA_PUBLIC: "real",
  GVA_TOTAL: "real",
  TAXES: "Taxes",
  GDP: "real",
  POP_GDP: "integer",
  GDP_CAPITA: "real",
  GVA_MAIN: "text",
  MUN_EXPENDIT: "real",
  // COMP_TOT: "integer",
  // COMP_A:
  //   "Number of Companies: Agriculture, livestock, forestry, fishing and aquaculture",
  // COMP_B: "Number of Companies: Extractive industries",
  // COMP_C: "Number of Companies: Industries of transformation",
  // COMP_D: "Number of Companies: Electricity and gas",
  // COMP_E:
  //   "Number of Companies: Water, sewage, waste management and decontamination activities",
  // COMP_F: "Number of Companies: Construction",
  // COMP_G:
  //   "Number of Companies: Trade; repair of motor vehicles and motorcycles",
  // COMP_H: "Number of Companies: Transport, storage and mail",
  // COMP_I: "Number of Companies: Accommodation and food",
  // COMP_J: "Number of Companies: Information and communication",
  // COMP_K:
  //   "Number of Companies: Financial, insurance and related services activities",
  // COMP_L: "Number of Companies: Real estate activities",
  // COMP_M:
  //   "Number of Companies: Professional, scientific and technical activities",
  // COMP_N:
  //   "Number of Companies: Administrative activities and complementary services",
  // COMP_O:
  //   "Number of Companies: Public administration, defense and social security",
  // COMP_P: "Number of Companies: Education",
  // COMP_Q: "Number of Companies: Human health and social services",
  // COMP_R: "Number of Companies: Arts, culture, sport and recreation",
  // COMP_S: "Number of Companies: Other service activities",
  // COMP_T: "Number of Companies: Domestic services",
  // COMP_U:
  //   "Number of Companies: International and other extraterritorial institutions",
  HOTELS: "integer",
  BEDS: "integer",
  // Pr_Agencies: "Total number of private bank agencies",
  // Pu_Agencies: "Total number of public bank agencies",
  // Pr_Bank: "Total number of private banks",
  // Pu_Bank: "Total number of public banks",
  // Pr_AssetsTotal: "amount of private bank assets in Reais",
  // Pu_Assets: "Total amount of public bank assets in Reais",
  // Cars: "Total number of cars",
  // Motorcycles: "Total number of motorcycles, scooters, moped",
  // Wheeled_tractor: "Total number of wheeled tractors",
  UBER: "integer",
  MAC: "integer"
  // "WAL-MART": "Total number of Walmart Stores",
  // POST_OFFICES: "Total number of post offices"
};

export const tableHeadersArr = Object.keys(tableHeaders);


