import express from "express";
const router = express.Router();
import winston from "winston";
import { getGVAperState } from "../SQL/graph-queries";

router.get("/:querydata", async (req, res) => {
  winston.info("gettin graph data");
  const { dbPromise, params } = req;
  const db = await dbPromise;
  const fields = JSON.parse(params.querydata);

  if (Object.values(fields).filter(v => v === true).length === 0) {
    res.json({
      message: "success",
      result: []
    });
  } else {
    try {
      const [result] = await Promise.all([db.all(getGVAperState(fields))]);
      res.json({
        message: "success",
        result
      });
    } catch (err) {
      winston.error(
        "route error; route = 'graph/:querydata' description -> ",
        err
      );
      res.status(400).json({
        err: "Server was unable to process request due to invalid query syntax"
      });
    }
  }
});

export default router;
