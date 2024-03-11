import { Router } from "express";
import passport from "passport";

import { AuthenticationController } from "@features/auth";
import { ProductController } from "@features/product";
import tokenController from "@features/token/token.controller";
import { SettingsController } from "@features/settings";


const routes = Router();
routes.get("/auth/install", AuthenticationController.install);

routes.post(
  "/products",
  passport.authenticate("jwt", { session: false }),
  ProductController.create
);

routes.get(
  "/products/total",
  passport.authenticate("jwt", { session: false }),
  ProductController.getTotal
);

routes.get(
  "/products",
  passport.authenticate("jwt", { session: false }),
  ProductController.getAll
);

routes.delete(
  "/products/:id",
  passport.authenticate("jwt", { session: false }),
  ProductController.delete
);

routes.post(
  "/createtoken",
  passport.authenticate("jwt", { session: false }),
  tokenController.create
);


routes.get(
  "/tokenandshop",
  passport.authenticate("jwt", { session: false }),
  tokenController.getTokensAndShop
);


routes.get(
  "/token",
  passport.authenticate("jwt", { session: false }),
  tokenController.getTokens
);

routes.delete(
  "/token/:id",
  passport.authenticate("jwt", { session: false }),
  tokenController.delete
);




//-----   ROUTES SETTINGS SHOP //----- 
routes.post(
  "/createsetting",
  passport.authenticate("jwt", { session: false }),
  SettingsController.create
);

routes.get(
  "/settings",
  passport.authenticate("jwt", { session: false }),
  SettingsController.getSettings
);

//-------------









export default routes;
