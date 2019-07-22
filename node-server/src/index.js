import "dotenv/config";
import express from "express";
import cors from "cors";

const server = express();

server.use(cors());

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);
