import express from 'express';
import { getAll } from "../controllers/user_info.controller.js";

const userRouter = express.Router();

userRouter.get("/list", getAll);

export default userRouter;
