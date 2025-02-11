import express from 'express';
import { errorHandler } from "./src/middlewares/error.middleware.js";
import userInfoController from './src/controllers/user_info.controller.js';

let app = express();
let port = process.env.PORT || 3000;

app.use("/users", userInfoController);
app.use(errorHandler);
app.listen(port);
console.log('Started on: ' + port);

