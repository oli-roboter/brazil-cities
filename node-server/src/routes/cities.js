const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("entrou o request");
  const { dbPromise } = req;
  const db = await dbPromise;
  console.log(db);
  try {
    const [test] = await Promise.all([db.all(`SELECT * FROM cities`)]);
    res.json({
      message: "success",
      data: test
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
