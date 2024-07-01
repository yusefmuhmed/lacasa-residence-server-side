import { UserController } from "../controller/UserController";
import { Router } from "express";

const router = Router();

router.get("/getAllUsers", UserController.getAllUsers);
router.get("/getUserById/:id", UserController.getUserById);
router.post("/registerUser", UserController.registerUser);

export default router;