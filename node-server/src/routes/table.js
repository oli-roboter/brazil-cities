import express from "express";
const router = express.Router();
import winston from "winston";
import { getTableData, getTotalRows } from "../SQL/table-queries";
import { withFilterAndSort, withFilter } from "../utils/helper-functions";

router.get("/:querydata", async (req, res) => {
  winston.info("gettin cities data");
  const { dbPromise, params } = req;
  const queryData = JSON.parse(params.querydata);
  const { sortBy, sortOrder, pageNum, pageSize, filterStr } = queryData;
  const db = await dbPromise;

  try {
    const [result, totalRows] = await Promise.all([
      db.all(
        withFilterAndSort(getTableData)(filterStr)(sortBy, sortOrder)(
          pageNum,
          pageSize
        )
      ),
      db.get(withFilter(getTotalRows)(filterStr)())
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
