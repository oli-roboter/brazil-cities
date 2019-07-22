import "dotenv/config";
import express from "express";
import cors from "cors";
import Promise from "bluebird";
import sqlite from "sqlite";
//import logger from winston ?
import { init } from "./scripts/init-database";
import citiesRoutes from "./routes/cities";

const server = express();
const dbSource = "./db.sqlite";
const dbPromise = sqlite.open(dbSource, { Promise });

//initiates sqlite DB and populates it
init(dbPromise).then(() => console.log("Database ready"));

server.use(cors());
server.use(function(req, res, next) {
  //why can't I pass db directly? Am I instantiating loads of DBs?
  req.dbPromise = dbPromise;
  next();
});

server.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

server.use("/cities", citiesRoutes);

server.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}!`)
);
