import fs from "fs";
import { tableHeaders } from "../database/table-headers";
import winston from "winston";
import {
  insertInitialData,
  getTableFields
} from "../database/initial-data-queries";
const cities = require("../database/brazil-cities.json");
const rows = cities.length;
/*
 better to have const at top? const db = await dbPromise;
 or pass it into functions?
 */

export async function initDB(dbPromise) {
  try {
    const db = await dbPromise;
    await createDB(db);
    const tableExists = await checkRecordsExists(db);

    if (!tableExists) {
      winston.info("Table 'cities' created");
      return await insertRecords(db);
    } else {
      winston.warn("Table 'cities' already existing and populated!");
    }
  } catch (err) {
    winston.error("init process error:", err);
    throw err;
  }
}

//to do: rewrite using sql-template-strings sintax
async function createDB(db) {
  winston.info("Initialising DB.");
  try {
    const fields = getTableFields(tableHeaders);
    const sqlFields = fields.map(kv => `${kv[0]} ${kv[1]}`).join();
    const sql = `CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY AUTOINCREMENT, ${sqlFields})`;
    await db.run(sql);
  } catch (err) {
    throw { location: "createDB", err };
  }
}

async function checkRecordsExists(db) {
  winston.info("Checking if table 'cities' exists...");
  try {
    const hits = await Promise.all([db.all(`SELECT * FROM cities`)]);
    return hits[0].length > 0 ? true : false;
  } catch (err) {
    throw { location: "checkRecordsExists", err };
  }
}

async function insertRecords(db) {
  winston.info("Inserting data into table.");
  const header = insertInitialData(tableHeaders);
  const insertStr = header.headerStr;
  const valuesStr = header.valueStr;
  const insert = `INSERT INTO cities (${insertStr}) VALUES (${valuesStr})`;
  const headerKeys = header.headerKeys;
  try {
    for (let i = 0; i < rows; i++) {
      const insertArr = headerKeys.map(k => cities[i][`${k}`]);
      await db.run(insert, insertArr);
      if (i !== 0 && i % 1000 === 0) {
        winston.info(`${i} rows inserted`);
      }
    }
    winston.info(`Finished, ${rows} rows inserted`);
  } catch (err) {
    throw { location: "insertRecords", err };
  }
}
