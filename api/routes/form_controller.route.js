import express from "express"
import { createCategory } from "../controller/form_category.controller.js"

const router = express.Router()

router.post("/createCategory", createCategory)

export default router
