import { connectDB } from "../backend/db.js";
import { userRoute } from "./routes/userRoutes.js"
import { taskRoute } from "./routes/taskRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);

app.get('/', (req, res) => {
    res.send("Server is running");
   
});

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);