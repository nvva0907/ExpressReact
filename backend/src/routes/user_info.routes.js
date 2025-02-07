import express from 'express';
import { getAllPagination } from "../controllers/user_info.controller.js";

const userRouter = express.Router();

userRouter.get("/list", getAllPagination);

export default userRouter;
