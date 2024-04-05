import { NextFunction, Request, Response } from "express";
import { StatusCode } from "@utils";
import { StoreService } from "@features/store";

export interface StoreRequest extends Request {
  user: { user_id: number };
}

class StoreController {

  async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await StoreService.getDataStorealt(+req.user.user_id);
      return res.status(StatusCode.CREATED).json(data);
    } catch (e) {
      next(e);
    }
  }

}

export default new StoreController();
