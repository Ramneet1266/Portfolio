import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import formRouter from "./routes/form.route.js"
import formCategoryRouter from "./routes/form_controller.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
dotenv.config()

mongoose
	.connect(process.env.MONGO)
	.then(() => {
		console.log("Connected to MongoDB")
	})
	.catch((err) => {
		console.log(err)
	})

app.use(express.json())
app.use(cookieParser())
app.use(
	cors({
		origin: process.env.FRONTEND_URL,
		credentials: true,
	})
)

app.use("/api/form", formRouter)
app.use("/api/formCategory", formCategoryRouter)
app.listen(7000, () => {
	console.log("Server is running on port 7000 ")
})
