import express from "express";
import { supabase } from "./config/db.js";
import { PORT } from "./config/config.js";
import authRoutes from "./routes/authRoutes.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

const app = express();

// app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.get("/test-db", async (req, res) => {
  const data = await supabase.from("db_role").select("*");
  return res.json({ ok: true, data });
});

app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`Server is running on port ${PORT}`)
);