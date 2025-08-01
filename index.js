import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import entryRoutes from "./routes/entryRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;
const ORIGIN_URL = process.env.ORIGIN_URL || "http://localhost:5173";

app.use(
  cors({
    origin: ORIGIN_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", authRoutes);
app.use("/api", entryRoutes);

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
