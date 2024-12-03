import React from "react"
import "./Navbar.css"
import { useState } from "react"
import logo from "../../assets/logo.png"

export default function Navbar() {
	const [activeNav, setActiveNav] = useState("#")
	return (
		<header className="container">
			<a href="#" onClick={() => setActiveNav("#")}>
				<img src={logo} alt="" />
			</a>

			<nav className="nav_items">
				<a
					href="#about"
					onClick={function () {
						setActiveNav("#about")
					}}
				>
					About
				</a>
				<a
					href="#services"
					onClick={function () {
						setActiveNav("#services")
					}}
				>
					services
				</a>
				<a
					href="#myWork"
					onClick={function () {
						setActiveNav("#myWork")
					}}
				>
					My Work
				</a>
				<a
					href="#process"
					onClick={function () {
						setActiveNav("#process")
					}}
				>
					Working Process
				</a>
				<a
					href="#contact"
					onClick={function () {
						setActiveNav("#contact")
					}}
				>
					Contact
				</a>
			</nav>
			<div className="nav_btn">
				<a href="#contact" onClick={() => setActiveNav("#contact")}>
					<button>Contact Now</button>
				</a>
			</div>
		</header>
	)
}
