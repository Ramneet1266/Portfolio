import Form from "../model/form.modal.js"

export const createWebsite = async (req, res) => {
	try {
		const website = await Form.create(req.body)
		return res.status(201).json(website)
	} catch (error) {
		console.log(error)
	}
}

export const updateWebsite = async (req, res) => {
	const website = await Form.findById(req.params.id)
	if (!website) {
		return 404, "Website Not Found!"
	}
	try {
		const updateWebsite = await Form.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		res.status(200).json(updateWebsite)
	} catch (error) {
		console.log(error)
	}
}
export const deleteWebsite = async (req, res) => {
	const website = await Form.findById(req.params.id)
	if (!website) {
		return 404, "Website Not Found!"
	}
	try {
		await Form.findByIdAndDelete(req.params.id)
		res.status(200).json("Website has been deleted!!")
	} catch (error) {
		console.log(error)
	}
}
export const getListsOfWebsite = async (req, res) => {
	try {
		const website = await Form.find({})
		res.status(200).json(website)
	} catch (error) {
		console.log(error)
	}
}
