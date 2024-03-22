import { NextFunction, Request, Response, response } from "express";
import { StatusCode } from "@utils";
import { ISyncedprod } from "./interface/syncedProds.interface";
import { syncedProdsService } from ".";


class syncedProdsController {

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const bodyData = req.body;
      console.log("body", bodyData)

      
      return res.status(StatusCode.CREATED).json(response);
    } catch (e) {
      next(e);
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try { 
      const data = await syncedProdsService.findAll(+req.user.user_id);
      return res.status(StatusCode.OK).json(data);
       
    } catch (e) {
      next(e);
    }
  }



  // async delete(
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ): Promise<Response | void> {
  //   try {
  //     const data = await TokenService.delete(
  //       req.params.id as string
  //     );
  //     return res.status(StatusCode.OK).json(data);
  //   } catch (e) {
  //     next(e);
  //   }
  // }





}

export default new syncedProdsController();
