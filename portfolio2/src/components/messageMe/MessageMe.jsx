import React from "react"
import "./messageMe.css"

export default function MessageMe() {
	return (
		<div className="message_container">
			<div className="message_heading">
				<h5>Leave a Message</h5>
			</div>
			<div className="main_div">
				\
				<form action="">
					<div className="first_section">
						<div className="sub_section">
							<p>Name</p>
							<input type="text" placeholder="Your Name" />
						</div>
						<div className="sub_section">
							<p>Email</p>
							<input type="text" placeholder="Your Email" />
						</div>
					</div>
					<div className="second_section">
						<p>Message</p>
						<input type="text" placeholder="Your Message" />
					</div>
					<button>Submit</button>
				</form>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3423.6592607520743!2d75.8409167!3d30.8961917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUzJzQ2LjMiTiA3NcKwNTAnMjcuMyJF!5e0!3m2!1sen!2sin!4v1727871802862!5m2!1sen!2sin"
					width="600"
					height="450"
					// style="border:0;"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	)
}
