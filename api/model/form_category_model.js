import mongoose from "mongoose"

const formCategorySchema = mongoose.Schema(
	{
		CategoryName: {
			type: String,
		},
	},
	{ timestamps: true }
)
const FormCategory = mongoose.model("Category", formCategorySchema)
export default FormCategory
