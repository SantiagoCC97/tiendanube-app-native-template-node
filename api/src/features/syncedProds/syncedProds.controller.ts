import { NextFunction, Request, Response, response } from "express";
import { StatusCode } from "@utils";
import { ISyncedprod } from "./interface/syncedProds.interface";
import syncedProdsService from "./syncedProds.service";


class syncedProdsController {


  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
      const bodyData = req.body;
        
      //  se crea primero en TiendaNube producto, para utilizar su ID de producto generado en el almacenamiento de producto en BD.
      const save = await syncedProdsService.createToTiendanube(bodyData, +req.user.user_id);
      // se almacena producto en Base de datos.
      
      if(save){
        console.log("sisas");
        
      }







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
