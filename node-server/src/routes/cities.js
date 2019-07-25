import express from "express";
import winston from "winston";
import SQL from "sql-template-strings";
import { tableHeadersArr } from "../database/table-headers";
const router = express.Router();

router.get("/tabledata/:querydata", async (req, res) => {
  winston.info("gettin cities data");
  const { dbPromise, params } = req;
  const queryData = JSON.parse(params.querydata);
  const { sortBy, sortOrder, pageNum, pageSize, filterBy } = queryData;

  //doesn't work in select statement. ry with append statement
  const headerColumns = tableHeadersArr.join();
  console.log("headerCols", headerColumns);
  const db = await dbPromise;

  //other module
  try {
    const [test] = await Promise.all([
      db.all(
        SQL`
          SELECT
            CITY,
            STATE
          FROM cities
          WHERE
            STATE=${filterBy}
          ORDER BY ${sortBy} `.append(sortOrder)
      )
    ]);
    res.json({
      message: "success",
      data: test
    });
  } catch (err) {
    winston.error(
      "route error; route = 'cities/tabledata/:querydata' description ->",
      err
    );
    res.status(400).json({
      err: "Server was unable to process request due to invalid query syntax"
    }); //configurer error for client
  }
});

export default router;

/*
mysql.query('SELECT author FROM books WHERE name = ? AND author = ?', [book, author])
// is equivalent to
mysql.query(SQL`SELECT author FROM books WHERE name = ${book} AND author = ${author}`)
 */
