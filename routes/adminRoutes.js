import { allocateClass, login, register } from "../admin/adminController.js";
import { verifyToken } from "../admin/userAuth.js";

import express from "express";
const router = express.Router();

router.post("/login", login);
router.post("/regsiter", register);
router.post("/class", verifyToken, allocateClass);

export default router;
