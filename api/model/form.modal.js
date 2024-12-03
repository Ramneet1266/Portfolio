import mongoose from "mongoose"

const formSchema = mongoose.Schema(
	{
		website_name: {
			type: String,
			required: true,
		},
		github_link: {
			type: String,
			required: true,
			unique: true,
		},
		website_link: {
			type: String,
			required: true,
			unique: true,
		},
		CategoryName: {
			type: String,
		},
	},
	{ timestamps: true }
)
const Form = mongoose.model("Website_form", formSchema)
export default Form
