import "dotenv/config";
import express from "express";
import cors from "cors";
import Promise from "bluebird";
import sqlite from "sqlite";
import winston, { transports, format } from "winston";
import { init } from "./scripts/init-database";
import citiesRoutes from "./routes/cities";

const server = express();
const dbSource = "./db.sqlite";
const dbPromise = sqlite.open(dbSource, { Promise });

//setting up logger
winston.configure({
  level: "debug",
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss"
    }),
    format.printf(
      info => `${info.timestamp} ${info.level}: ${displayLogger(info)}}`
    )
  ),
  transports: [new transports.Console()]
});

function displayLogger(info) {
  return /error/.test(info.level)
    ? `${info.err} ${JSON.stringify(info, null, 2)}`
    : info.message;
}

//initiates sqlite DB and populates it
init(dbPromise)
  .then(() => winston.info("Database ready"))
  .then(() =>
    server.listen(process.env.PORT, () =>
      winston.info(`Server listening on port ${process.env.PORT}!`)
    )
  );

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
