import { Router } from "express";

import JobRoutes from "./job.routes.js";
import FilterRoutes from "./filter.routes.js";
import ApplicationRoutes from "./application.routes.js";

const router = Router();

router.use("/api", JobRoutes);
router.use("/api/filter", FilterRoutes);
router.use("/api", ApplicationRoutes);
export default router;
