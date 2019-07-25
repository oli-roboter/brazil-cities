import express from "express";
const router = express.Router();
import winston from "winston";

//to do -> add graph routes
router.get("/graph", async (req, res) => {
  winston.info("gettin graph data");
  res.json({
    message: "success",
    data: { test: "testo" }
  });
});

export default router;
