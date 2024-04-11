import { NextFunction, Request, Response } from "express";
import { StatusCode } from "@utils";
import { ProductService } from "@features/product";

export interface ProductRequest extends Request {
  user: { user_id: number };
}

class ProductController {
  

  async getTotal(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {  
      const data = await ProductService.findAllCount(+req.user.user_id);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const data = await ProductService.findAll(+req.user.user_id);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }

  


}

export default new ProductController();
