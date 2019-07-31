import express from "express";
const router = express.Router();
import winston from "winston";
import { getGVAperState } from "../SQL/graph-queries";

//to do -> add graph routes
router.get("/", async (req, res) => {
  winston.info("gettin graph data");
  const { dbPromise } = req;
  const db = await dbPromise;

  try {
    const [result] = await Promise.all([db.all(getGVAperState())]);
    res.json({
      message: "success",
      result
    });
  } catch (err) {
    winston.error(
      "route error; route = 'graph/:querydata' description ->",
      err
    );
    res.status(400).json({
      err: "Server was unable to process request due to invalid query syntax"
    });
  }
});

export default router;
