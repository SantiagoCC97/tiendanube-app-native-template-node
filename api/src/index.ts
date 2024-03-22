import express from "express";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
// @ts-ignore
import dotenv from "dotenv";
import path from "path"; 
import { dbConnection } from "./config/database";




dotenv.config({
  path: path.resolve(".env"),
});
import { AppRoutes } from "@config";
import {
  beforeCheckClientMiddleware,
  errorHandlingMiddleware,
} from "@middlewares";
import "./utils/passaport-strategy";
import { bodyParser } from "json-server";

const port = process.env.PORT || 7200;
const app = express(); 

dbConnection();

app.use(bodyParser)
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(cors());
app.use(beforeCheckClientMiddleware);
app.use(AppRoutes);
app.use(errorHandlingMiddleware);
 
 
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


