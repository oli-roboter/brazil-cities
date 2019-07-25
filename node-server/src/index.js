import "dotenv/config";
import express from "express";
import cors from "cors";
import Promise from "bluebird";
import sqlite from "sqlite";
import initLogger from "./init/init-logger";
import { initDB } from "./init/init-database";
import winston from "winston";
import tableRoutes from "./routes/table";
import graphRoutes from "./routes/graph";

const server = express();
const dbSource = "./db.sqlite";
const dbPromise = sqlite.open(dbSource, { Promise });

//initiates logger
initLogger();

//initiates sqlite DB and populates it with data from brazil-cities.json
initDB(dbPromise)
  .then(() => winston.info("Database ready"))
  .then(() =>
    server.listen(process.env.PORT, () =>
      winston.info(`Server listening on port ${process.env.PORT}!`)
    )
  );

server.use(cors());

server.use(function(req, res, next) {
  req.dbPromise = dbPromise;
  next();
});

server.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

server.use("/table", tableRoutes);
server.use("/graph", graphRoutes);
