import tableHeaders from "../database/table-headers";
import winston from "winston";
import {
  insertInitialData,
  getTableFields
} from "../database/initial-data-queries";
const cities = require("../database/brazil-cities.json");
/*
 better to have const at top? const db = await dbPromise;
 or pass it into functions?
 */

export async function init(dbPromise) {
  winston.info("Initialising DB.");
  try {
    const db = await dbPromise;
    await createDB(db);
    const populated = await checkRecordsExists(db);

    if (!populated) {
      return await insertRecords(db);
    } else {
      winston.warn("Table already populated!");
    }
  } catch (err) {
    winston.error("init process error:", err);
  }
}

async function checkRecordsExists(db) {
  winston.info("Checking if there are records in table...");
  try {
    const hits = await Promise.all([db.all(`SELECT * FROM cities`)]);
    // winston.debug("hits", hits);
    return hits[0].length > 0 ? true : false;
  } catch (err) {
    throw { location: "checkRecordsExists", err };
  }
}

async function createDB(db) {
  winston.info("Creating database table.");
  try {
    const fields = getTableFields(tableHeaders);
    // winston.debug(fields);
    const sqlFields = fields.map(kv => `${kv[0]} ${kv[1]}`).join();
    const sql = `CREATE TABLE cities (id INTEGER PRIMARY KEY AUTOINCREMENT, ${sqlFields})`;
    await db.run(sql);
    winston.info("Created Database!");
  } catch (err) {
    winston.warn("Database table already exists!");
    // throw { location: "createDB", err };
  }
}

async function insertRecords(db) {
  winston.info("Inserting data into table.");
  const header = insertInitialData(tableHeaders);
  // console.log(header);
  const insertStr = header.headerStr;
  const valuesStr = header.valueStr;
  const insert = `INSERT INTO cities (${insertStr}) VALUES (${valuesStr})`;
  const headerKeys = header.headerKeys;
  // console.log("insertStatement:", insert);
  try {
    for (let i = 0; i <= 3; i++) {
      const insertArr = headerKeys.map(k => cities[i][`${k}`]);
      // console.log("getting ready to roll", insertArr);
      await db.run(insert, insertArr);
      if (i % 1000 === 0) {
        winston.info(i, "rows inserted.");
      }
    }
    winston.info(`insert rows finished.`);
  } catch (err) {
    throw { location: "insertRecords", err };
  }
}
