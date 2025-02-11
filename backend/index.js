import express from 'express';
import { errorHandler } from "./src/middlewares/error.middleware.js";
import userInfoController from './src/controllers/user_info.controller.js';
import loginController from './src/controllers/login.controller.js';
import dotenv from "dotenv";
let app = express();
let port = process.env.PORT || 3000;
app.use(express.json());
dotenv.config();
app.use("/users", userInfoController);
app.use("/auth", loginController);
app.use(errorHandler);
app.listen(port);
console.log('Started on: ' + port);

