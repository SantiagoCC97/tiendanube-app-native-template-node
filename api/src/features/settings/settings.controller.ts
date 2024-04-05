import { NextFunction, Request, Response, response } from "express";
import { StatusCode } from "@utils";
import { SettingService } from "@features/settings";
import { ISettingsCreate } from "@features/settings";

export interface SettingsRequest extends Request {
  user: { user_id: number };
}

class SettingsController {

  async create(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try { 
      const data: ISettingsCreate = {
        shop_id: req.user[0].user_id, 
        autosync_orders: req.query.autosync_orders as string,
        ifProdExist: req.query.ifProdExist as string,
        cleanNoteOrder: req.query.cleanNoteOrder as string,
        country: req.query.country as string,
        use_dropi_checkout: "n" as string
      }
      const response = await SettingService.createSettings(data);
      return res.status(StatusCode.CREATED).json(response);
    } catch (e) {
      next(e);
    }
  }

  async getSettings(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try { 
      const data = await SettingService.getSettings(+req.user[0].user_id);
      return res.status(StatusCode.OK).json(data);
    } catch (e) {
      next(e);
    }
  }
}

export default new SettingsController();
