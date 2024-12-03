import { useEffect, useState } from "react"
import { ImCross } from "react-icons/im"
const AddForm = ({ closeModal }) => {
	useEffect(() => {
		document.body.style.overflowY = "hidden"
		return () => {
			document.body.style.overflowY = "scroll"
		}
	}, [])
	const [formData, setFormData] = useState({
		website_name: "",
		github_link: "",
		website_link: "",
		category: "",
	})
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await fetch(
				"http://localhost:7000/api/form/create",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						website_name: formData.website_name,
						github_link: formData.github_link,
						website_link: formData.website_link,
						category: formData.category,
					}),
				}
			)
			const json = await res.json()
			console.log(json)
		} catch (error) {
			console.log(error)
		}
	}
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<div className="modal_wrapper">
			<div className="form_cont">
				<ImCross className="cross_icon" onClick={closeModal} />
				<form>
					<h1>Add Website</h1>
					<div className="sub_div">
						<label>Website Name</label>
						<input
							type="text"
							name="website_name"
							value={formData.website_name}
							onChange={handleChange}
						/>
					</div>
					<div className="sub_div">
						<label>Github Link</label>
						<input
							type="text"
							name="github_link"
							value={formData.github_link}
							onChange={handleChange}
						/>
					</div>

					<div className="sub_div">
						<label>Website Link</label>
						<input
							type="text"
							name="website_link"
							value={formData.website_link}
							onChange={handleChange}
						/>
					</div>
					<div className="sub_div">
						<label>Category</label>
						<select
							className="select_form"
							name="category"
							value={formData.category}
							onChange={handleChange}
						>
							<option value="New">New</option>
							<option value="Old">Old</option>
							<option value="Best">Best</option>
						</select>
					</div>
					<button>Submit</button>
				</form>
			</div>
		</div>
	)
}
export default AddForm
