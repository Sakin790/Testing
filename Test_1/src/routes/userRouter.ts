import Router from "express";
import { userController } from "../controllers/userController";

const router = Router();

router.route("/status").get(userController.status);

export { router };
