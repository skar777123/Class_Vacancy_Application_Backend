import { classFinder, login, register } from "../user/userController.js";
import express from "express";
const router = express.Router();
import {verifyToken} from '../user/userAuth.js'

router.post("/login", login);
router.post("/class",verifyToken, classFinder);
router.post("/register", register);

export default router;
