import React from "react"
import { IoSettings } from "react-icons/io5"
import { FaDatabase } from "react-icons/fa"
import { MdAlignHorizontalRight } from "react-icons/md"
import { MdOutlineDesignServices } from "react-icons/md"
import { RiSeoFill } from "react-icons/ri"
import { SiAdobephotoshop } from "react-icons/si"
import "./features.css"

const feature_data = [
	{
		id: 1,
		image: <IoSettings />,
		title: "Front-End Development",
		para1: "We provide the best design by",
		para2: "following the latest trends.",
	},
	{
		id: 2,
		image: <MdAlignHorizontalRight />,
		title: "Back-End Development",
		para1: "Build and customize stunning ",
		para2: "pages in minutes.",
	},
	{
		id: 3,
		image: <FaDatabase />,
		title: "Database Development",
		para1: "The best SEO practices to ",
		para2: "achieve higher rakings.",
	},
	{
		id: 4,
		image: <SiAdobephotoshop />,
		title: "Logo Illustration",
		para1: "Detects the screen size and ",
		para2: "deliver optimezed images.",
	},
	{
		id: 5,
		image: <MdOutlineDesignServices />,
		title: "UI/UX Design",
		para1: "Detects the screen size and ",
		para2: "deliver optimezed images.",
	},
	{
		id: 6,
		image: <RiSeoFill />,
		title: "SEO Optimization",
		para1: "Detects the screen size and ",
		para2: "deliver optimezed images.",
	},
]

export default function Features() {
	return (
		<div className="cont" id="services">
			<h1 className="features_heading">My Services</h1>
			<h1>What I Do</h1>
			<div className="features_cards">
				{feature_data.map(({ id, title, image, para1, para2 }) => {
					return (
						<div className="features_card" key={id}>
							<div className="features_icon">{image}</div>
							<h4>{title}</h4>
							<p>{para1}</p>
							<p>{para2}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}
