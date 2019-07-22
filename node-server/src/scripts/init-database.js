/*
 better to have const at top? const db = await dbPromise;
 or pass it into functions?
 */

import tableHeaders from "../database/table-headers";
import {
  insertInitialData,
  getTableFields
} from "../database/initial-data-queries";
const cities = require("../database/brazil-cities.json");

export async function init(dbPromise) {
  console.log("Initialising DB!");
  try {
    const db = await dbPromise;
    await createDB(db);
    const populated = await checkRecordsExists(db);

    if (!populated) {
      return await insertRecords(db);
    } else {
      console.log("Table already populated!");
    }
  } catch (error) {
    console.error("init process error:", error);
  }
}

async function checkRecordsExists(db) {
  console.log("Checking if there are records in table");
  try {
    const hits = await Promise.all([db.all(`SELECT * FROM cities`)]);
    console.log("hits", hits);
    return hits[0].length > 0 ? true : false;
  } catch (err) {
    throw { location: "checkRecordsExists", err };
  }
}

async function createDB(db) {
  console.log("Getting cities table ready");
  try {
    const fields = getTableFields(tableHeaders);
    console.log(fields);
    const sqlFields = fields.map(kv => `${kv[0]} ${kv[1]}`).join();
    const sql = `CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY AUTOINCREMENT, ${sqlFields})`;
    await db.run(sql);
  } catch (err) {
    throw { location: "createDB", err };
  }
}

async function insertRecords(db) {
  console.log("Inserting data into table");
  const header = insertInitialData(tableHeaders);
  // console.log(header);
  const insertStr = header.headerStr;
  const valuesStr = header.valueStr;
  const insert = `INSERT INTO cities (${insertStr}) VALUES (${valuesStr})`;
  const headerKeys = header.headerKeys;
  console.log("insertStatement:", insert);
  try {
    for (let i = 0; i <= 3; i++) {
      const insertArr = headerKeys.map(k => cities[i][`${k}`]);
      console.log("getting ready to roll", insertArr);
      await db.run(insert, insertArr);
      console.log("row", i, "inserted");
    }
  } catch (err) {
    throw { location: "insertRecords", err };
  }
}
