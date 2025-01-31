import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";




//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

// middlewares :
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/auth", authRoutes);



// rest api 
app.get('/', (req, res) => { 
    res.send("<h1>Welcome to CoWorking Space Messa</h1>");
})

// PORT
const PORT = process.env.PORT || 8080 ;

//create server:
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} on mode on port ${PORT}` .bgCyan.white);
});
