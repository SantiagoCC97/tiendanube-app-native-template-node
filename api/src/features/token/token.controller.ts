import { NextFunction, Request, Response, response } from "express";
import { StatusCode } from "@utils";
import { TokenService } from "@features/token";

export interface TokenRequest extends Request {
  user: { user_id: number };
}

class TokenController {

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      console.log("req****", req);
      const response = await TokenService.createToken(req);

      return res.status(StatusCode.CREATED).json(response);
    } catch (e) {
      next(e);
    }
  }

  async getTokens(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

     try {
      const data = await TokenService.getTokens(+req.user.user_id);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }


}

export default new TokenController();
