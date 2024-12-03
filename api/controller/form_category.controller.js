import FormCategory from "../model/form_category_model.js"

export const createCategory = async (req, res) => {
	try {
		const category = await FormCategory.create(req.body)
		return res.status(201).json(category)
	} catch (error) {
		console.log(error)
	}
}
