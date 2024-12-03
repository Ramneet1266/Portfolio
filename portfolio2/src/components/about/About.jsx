import React from "react"
import "./about.css"

export default function About() {
	return (
		<div className="about_cont" id="about">
			<h1 className="about_heading">About</h1>
			<h2>Know Me More</h2>
			<div className="about_main">
				<div className="main_left">
					<h1>I'm Ramneet Kaur, a Full Stack Developer</h1>
					<p>
						I'm a student of Master of Computer Applications (MCA),
						seeking opportunities to apply academic knowledge and
						programming skills in a dynamic and challenging
						environment. Possess a strong foundation in computer
						science, algorithms, and software development. Proven
						ability to work collaboratively in team environments and
						adapt quickly to new technologies. Committed to continuous
						learning and professional growth
					</p>
					<div className="left_sub">
						<div className="sub">
							<p>Email</p>
							<b>ramneetk0105@gmail.com</b>
						</div>
						<div className="sub">
							<p>Date of Birth</p>
							<b>22 September, 2002</b>
						</div>
						<div className="sub">
							<p>Location</p>
							<b>Ludhiana, Punjab</b>
						</div>
					</div>
				</div>
				<div className="main_right">
					<div className="box1"></div>
					<div className="box2"></div>
					<div className="box3 info">FRESHER</div>
				</div>
			</div>
		</div>
	)
}
