import express from "express";
import { supabase } from "./config/db.js";
import { PORT } from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import typeCaseRoutes from "./routes/typeCaseRoutes.js";
import lawyerRoutes from "./routes/lawyerRoutes.js";
import clientRoutes from "./routes/clientRoutes.js"
import profileRoutes from "./routes/profileRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

// app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/type-cases", typeCaseRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin/lawyers", lawyerRoutes);
app.use("/api/admin/clients", clientRoutes); 
app.use("/api/profile", profileRoutes); 

app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);