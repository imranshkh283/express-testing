import express from "express";
import routes from "./utils/routes";

function server(): express.Application {
  const app = express();
  app.use(express.json());
  routes(app);
  return app;
}

export default server;
