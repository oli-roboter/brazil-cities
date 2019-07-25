import express from "express";
const router = express.Router();
import winston from "winston";
import { getTableData } from "../database/sqlite-queries";

router.get("/:querydata", async (req, res) => {
  winston.info("gettin cities data");
  const { dbPromise, params } = req;
  const queryData = JSON.parse(params.querydata);
  const { sortBy, sortOrder, pageNum, pageSize, filterBy } = queryData;
  const db = await dbPromise;

  try {
    const [test] = await Promise.all([
      db.all(getTableData(filterBy, sortBy, sortOrder))
    ]);
    res.json({
      message: "success",
      data: test
    });
  } catch (err) {
    winston.error(
      "route error; route = 'table/:querydata' description ->",
      err
    );
    res.status(400).json({
      err: "Server was unable to process request due to invalid query syntax"
    });
  }
});

export default router;
