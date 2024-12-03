import React, { useState, useEffect } from "react"
import "./website_section.css"
import { FaPlus } from "react-icons/fa"
import AddForm from "./AddForm"

export default function Website_section() {
	const [showModal, setShowModal] = useState(false)
	const [category, setCategory] = useState([])
	const [website, setWebsite] = useState(null)

	const loadData = async () => {
		try {
			const response = await fetch(
				"http://localhost:7000/api/form/get"
			)
			const web_data = await response.json()
			// setCategory(response[1])
			setWebsite(web_data)
			console.log(web_data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		loadData()
	}, [])

	const openModal = () => {
		setShowModal(true)
	}
	const closeModal = () => {
		setShowModal(false)
	}
	return (
		<div className="main_container" id="myWork">
			<div className="website_heading">
				<h1 className="first_heading">My Recent Work</h1>
				<h1>Portfolio</h1>
			</div>
			<div className="website_category">
				<p>All</p>
				<p>New</p>
				<p>Old</p>
				<p>Best</p>
			</div>
			<div className="add_form" onClick={openModal}>
				<FaPlus className="website_icon" />
				<p>Add Website</p>
			</div>
			{/* the argument passed from here will go to AddForm.jsx */}
			{showModal && <AddForm closeModal={closeModal} />}
			<div className="cards">
				{website &&
					website.map((data) => {
						return (
							<div className="card" key={data._id}>
								{/* <img src={image} alt="" /> */}
								<p>{data.website_name}</p>
								<p>{data.CategoryName}</p>
								<div className="website_btn">
									<a className="github" herf={data.github_link}>
										Github
									</a>
									<a className="demo" href={data.webiste_link}>
										Live Demo
									</a>
								</div>
							</div>
						)
					})}
			</div>
		</div>
	)
}
