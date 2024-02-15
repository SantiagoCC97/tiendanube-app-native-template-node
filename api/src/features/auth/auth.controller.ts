import { NextFunction, Request, Response } from "express";
import { StatusCode } from "@utils";
import { InstallAppService, AuthService } from "@features/auth";
import { StoreService } from "@features/store";

class AuthenticationController {
  async install(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await InstallAppService.install(
        req.query.code as string
      );

      const dataStore = await StoreService.getDataStore(data.user_id as number)
      console.log("esta es la gata", dataStore)
      return res.status(StatusCode.OK).json(data);

    } catch (e) {
      return next(e);
    }
  }

  async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = AuthService.login(req.body);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      return next(e);
    }
  }
}

export default new AuthenticationController();
