import { Router } from "express";
import {
  fetchJobs,
  createJob,
  getJob,
  deleteJob,
} from "../controllers/job.controller.js";
const router = Router();

router.get("/jobs", fetchJobs);
router.post("/job", createJob);
router.get("/job/:id", getJob);
router.delete("/job/:id", deleteJob);

export default router;
