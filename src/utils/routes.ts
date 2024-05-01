import { Express, Request, Response } from "express";

import {
  createUserHandler,
  getAllUserHandler,
} from "../controller/user.controller";

function routes(app: Express) {
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/api/users", createUserHandler);

  app.get("/api/users", getAllUserHandler);
}

export default routes;
