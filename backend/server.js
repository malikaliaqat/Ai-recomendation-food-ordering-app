<<<<<<< HEAD
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import dns from "node:dns/promises";
import foodRouter from "./routes/foodroute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config()
//app config
const app = express()
const port = process.env.PORT || 4000
//midleware
app.use(express.json())
app.use(cors())

connectDb()  // ← server ke andar nahi, bahar rakho


//api endpoint
app.use("/api/food", foodRouter)

app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port} 🚀`)
})
=======



import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Api working");
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
>>>>>>> e1f6e32438c35dc4c97448c8008b0029a8c23bdb
