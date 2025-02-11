import express from 'express';
import userRouter from './src/routes/user_info.routes.js';
import { errorHandler } from "./src/middlewares/error.middleware.js";

let app = express();
let port = process.env.PORT || 3000;

app.use("/users", userRouter);
app.use(errorHandler);
app.listen(port);
console.log('Started on: ' + port);

