import React, { useState } from "react"
import "./banner.css"
import { FaTools } from "react-icons/fa"
import { IoIosArrowDropdownCircle } from "react-icons/io"

export default function Banner() {
	const [activeLink, setActiveLink] = useState("#")
	return (
		<>
			<div className="heading" id="banner">
				<span>Hello, I'm</span>
				<h1>Ramneet Kaur</h1>
				<p>AND THIS IS MY RESUME</p>
			</div>
			<div className="banner_btn">
				<a href="#myWork" onClick={() => setActiveLink("#myWork")}>
					<div className="btns">
						<IoIosArrowDropdownCircle className="icons" />
						<p>Explore Work</p>
					</div>
				</a>
				<a href="#services" onClick={() => setActiveLink("services")}>
					<div className="btns color_change">
						<FaTools className="icons" />
						<p>Services</p>
					</div>
				</a>
			</div>
		</>
	)
}
