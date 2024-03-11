import { NextFunction, Request, Response, response } from "express";
import { StatusCode } from "@utils";
import { TokenService } from "@features/token"; 
import { ITokenCreate } from "@features/token";

export interface TokenRequest extends Request {
  user: { user_id: number };
}

class TokenController {

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {      



      const data: ITokenCreate = {
        shop_id: req.user.user_id,
        token: req.query.token as string,
        shop_name: req.query.name as string,
      }
 
      const response = await TokenService.createToken(data);
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


  async getTokensAndShop(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const data = await TokenService.getTokensAndShop(+req.user.user_id);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await TokenService.delete(
        req.params.id as string
      );
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }





}

export default new TokenController();
