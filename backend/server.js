
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import dns from "node:dns/promises"
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/userRoute.js"
import path from "path"
import { fileURLToPath } from "url"
import cartRouter from './routes/cartRoute.js'

dns.setServers(["8.8.8.8", "1.1.1.1"])

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

connectDb()

// ✅ FIXED STATIC PATH (IMPORTANT)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use("/images", express.static(path.join(__dirname, "uploads")))

app.use("/api/food", foodRouter)
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port} 🚀`)
})