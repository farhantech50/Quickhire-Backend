import { Router } from "express";
import { createApplication } from "../controllers/application.controller.js";
const router = Router();

router.post("/application", createApplication);

export default router;
