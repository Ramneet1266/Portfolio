import React from "react"
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { FaPhoneFlip } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa6"
import ScrollToTop from "react-scroll-to-top"

export default function Contact() {
	return (
		<div className="contact_container" id="contact">
			<ScrollToTop smooth top="20" />
			<div className="contact_headings">
				<h5>Let's Get In Touch</h5>
				<h4>Contact Me</h4>
			</div>
			<div className="contact_div">
				<a href="https://api.whatsapp.com/send?phone+917340917533">
					<div className="contact_info">
						<FaPhoneFlip className="icon_contact" />
						<p>7340917533</p>
					</div>
				</a>
				<a href="mailto:ramneetk0105@gmail.com">
					<div className="contact_info">
						<MdOutlineEmail className="icon_contact" />
						<p>ramneetk0105@gmail.com</p>
					</div>
				</a>
				<a href="https://github.com/Ramneet1266">
					<div className="contact_info">
						<FaGithub className="icon_contact" />
						<p>Ramneet1266</p>
					</div>
				</a>
			</div>
		</div>
	)
}
