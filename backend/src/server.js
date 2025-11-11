import express from "express";
import { PORT } from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

// app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);