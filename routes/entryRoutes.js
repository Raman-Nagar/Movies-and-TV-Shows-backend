import express from "express";
import {
  addEntry,
  deleteEntry,
  getEntries,
  getStats,
  updateEntry,
} from "../controllers/entrycontroller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/entries", addEntry);
router.get("/entries", getEntries);
router.get("/stats", getStats);
router.put("/entries/:id", updateEntry);
router.delete("/entries/:id", deleteEntry);

export default router;
