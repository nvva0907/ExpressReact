import jwt from "jsonwebtoken";
import { baseController } from "../helpers/base_controller.helper.js";
import { AppException, successRes } from "../helpers/response.helper.js";
import express from "express";
const loginController = express.Router();

const login = baseController(async (req, res) => {
  const { username, password } = req.body;
  if (username !== "admin" || password !== "123456") {
    throw new AppException("UN_AUTHORIZED", "Thông tin đăng nhập không hợp lệ")
  }
  const user = { id: 1, username: "admin", role: "admin" };
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1h" });
  successRes(res, token);
});

loginController.post("/login", login);
export default loginController