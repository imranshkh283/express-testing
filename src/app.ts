import express from "express";
import config from "config";
import server from "./server";
import connect from "./utils/connect";
const port = config.get<number>("port");
import log from "./utils/logger";

const app = server();

app.listen(port, async () => {
  log.info(`Server is running on port ${port}`);
  await connect();
});
