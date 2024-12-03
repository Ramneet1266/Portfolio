import express from "express"
import {
	createWebsite,
	deleteWebsite,
	getListsOfWebsite,
	updateWebsite,
} from "../controller/form.controller.js"
const router = express.Router()

router.post("/create", createWebsite)
router.post("/update/:id", updateWebsite)
router.delete("/delete/:id", deleteWebsite)
router.get("/get", getListsOfWebsite)

export default router
