import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../utils/logger";
import { createUser, getAllUser } from "../service/user.service";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  try {
    const users = await getAllUser();
    return res.send(users);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
