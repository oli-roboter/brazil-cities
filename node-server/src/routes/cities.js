import express from "express";
import winston from "winston";
import SQL from "sql-template-strings";
const router = express.Router();

router.get("/:sortColumn/:state", async (req, res) => {
  console.log('"entrou na funssao"', sortColumn, state);
  // winston.info("entrou na funssao");
  const { dbPromise, params } = req;
  const { sortColumn, state } = params;
  console.log('"entrou na funssao"', sortColumn, state);
  const db = await dbPromise;

  try {
    const [test] = await Promise.all([
      db.all(
        SQL`
          SELECT
            CITY,
            STATE
          FROM cities
          WHERE
            STATE=${state}
          ORDER BY ${sortColumn} ASC
        `
      )
    ]);
    res.json({
      message: "success",
      data: test
    });
  } catch (err) {
    winston.error(
      "route error; route = 'cities/:sortColumn/:state' description ->",
      err
    );
    res.status(400).json({ error: err.message });
  }
});

export default router;

/*
mysql.query('SELECT author FROM books WHERE name = ? AND author = ?', [book, author])
// is equivalent to
mysql.query(SQL`SELECT author FROM books WHERE name = ${book} AND author = ${author}`)
 */
