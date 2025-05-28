import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./Database/index.js";
import userRoutes from "./Routes/Users.js";
import JobRoutes from "./Routes/JobRoutes.js";
import cookieParser from "cookie-parser";
const app = express();


dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser())
app.use('/user' , userRoutes);
app.use('/dashboard/job' , JobRoutes);

connectDB();


const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Port is running on ${PORT}`)
})