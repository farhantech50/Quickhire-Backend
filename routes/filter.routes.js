import { Router } from "express";
import { getCategory, getLocation } from "../controllers/filter.controller.js";
const router = Router();

router.get("/category", getCategory);
router.get("/location", getLocation);

export default router;
