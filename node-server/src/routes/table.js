import express from "express";
const router = express.Router();
import winston from "winston";
import { getTableData, getTotalRows } from "../database/sqlite-queries";
import { withFilterAndSort } from "../database/aux-functions";

router.get("/:querydata", async (req, res) => {
  winston.info("gettin cities data");
  const { dbPromise, params } = req;
  const queryData = JSON.parse(params.querydata);
  const { sortBy, sortOrder, pageNum, pageSize, filterStr } = queryData;
  const db = await dbPromise;

  try {
    const [result, totalRows] = await Promise.all([
      db.all(
        withFilterAndSort(filterStr)(sortBy, sortOrder)(pageNum, pageSize)(
          getTableData
        )
      ),
      db.get(withFilterAndSort(filterStr)()()(getTotalRows))
    ]);
    res.json({
      message: "success",
      result,
      totalRows
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
