import dotenv from "dotenv";
dotenv.config();
import "./models/db.js"; // Connect to MongoDB

import express from "express";
import cors from "cors";
import AuthRouter  from "./routes/AuthRouter.js";
import ProductRouter from "./routes/ProductRouter.js";
import memoryRoutes from "./routes/memoryRoutes.js";
import heritageRouter from "./routes/heritageRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://chhattisgarh-heritage-g8chs925d-priya-vermas-projects-f6292e3f.vercel.app/"
  ],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

// Routes
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);
app.use("/api/heritage", heritageRouter);
app.use("/api/memory", memoryRoutes);
app.use("/api/contact", contactRoutes);


app.get("/", (req, res) => {
  res.json({ message: "Backend is running"});
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
}); 