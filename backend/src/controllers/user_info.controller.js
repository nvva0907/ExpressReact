import express from 'express';
import { baseController } from "../helpers/base_controller.helper.js";
import { successRes } from "../helpers/response.helper.js";
import { getAllService } from "../services/user_info.service.js";

const userInfoController = express.Router();

const getAll = baseController(async (req, res) => {
  const { page = 1, pageSize = 10, search = "" } = req.query;
  const result = await getAllService(
    parseInt(page),
    parseInt(pageSize),
    search
  );
  successRes(res, result);
});


userInfoController.get("/list", getAll);
export default userInfoController