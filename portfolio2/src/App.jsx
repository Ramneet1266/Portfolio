import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Website_section from "./components/website_section/Website_section"
import "./index.css"
import Features from "./components/features/Features"
import About from "./components/about/About"
import Working_process from "./components/working/Working_process"
import Contact from "./components/contact/Contact"
import MessageMe from "./components/messageMe/MessageMe"

export default function App() {
	return (
		<>
			<div className="main">
				<Navbar />
				<Banner />
			</div>
			<About />
			<Features />
			<Website_section />
			<Working_process />
			<Contact />
			<MessageMe />
		</>
	)
}
