import React from "react"
import "./working_process.css"

export default function Working_process() {
	return (
		<div className="working_cont" id="process">
			<div className="working_heading">
				<h5>How I Work</h5>
				<p>My Working Process</p>
			</div>
			<div className="working_cont_2">
				<div className="timeline">
					<div className="working_text">
						<div className="text-area first_text">
							What is the goal of the website? Is it a portfolio,
							blog, e-commerce site, or informational platform?
							Understand the interest of audience.Study other websites
							in the same niche for inspiration and insights.
						</div>
						<div className="timeline_cont">
							<div
								className="text-box"
								style={{ padding: "2rem 2.7rem" }}
							>
								<p style={{ fontWeight: "900" }}>01</p>
								<p>IDEA</p>
							</div>
						</div>
					</div>

					<div className="working_text">
						<div className="text-area right_side second_text">
							What is the goal of the website? Is it a portfolio,
							blog, e-commerce site, or informational platform?
							Understand the interest of audience.Study other websites
							in the same niche for inspiration and insights.
						</div>
						<div className="timeline_cont right-container">
							<div className="text-box" style={{ padding: "2rem" }}>
								<p style={{ fontWeight: "900" }}>02</p>
								<p>SKETCH</p>
							</div>
						</div>
					</div>
					<div className="working_text">
						<div className="text-area third_text">
							What is the goal of the website? Is it a portfolio,
							blog, e-commerce site, or informational platform?
							Understand the interest of audience.Study other websites
							in the same niche for inspiration and insights.
						</div>
						<div className="timeline_cont left-container">
							<div className="text-box" style={{ padding: "2rem" }}>
								<p style={{ fontWeight: "900" }}>03</p>
								<p>DESIGN</p>
							</div>
						</div>
					</div>
					<div className="working_text">
						<div className="text-area right_side fourth_text">
							What is the goal of the website? Is it a portfolio,
							blog, e-commerce site, or informational platform?
							Understand the interest of audience.Study other websites
							in the same niche for inspiration and insights.
						</div>
						<div className="timeline_cont right-container">
							<div
								className="text-box"
								style={{ padding: "2rem 1.9rem" }}
							>
								<p style={{ fontWeight: "900" }}>04</p>
								<p>DEVELOP</p>
							</div>
						</div>
					</div>
					<div className="working_text">
						<div className="text-area fifth_text">
							What is the goal of the website? Is it a portfolio,
							blog, e-commerce site, or informational platform?
							Understand the interest of audience.Study other websites
							in the same niche for inspiration and insights.
						</div>
						<div className="timeline_cont left-container">
							<div
								className="text-box"
								style={{ padding: "2rem 2.7rem" }}
							>
								<p style={{ fontWeight: "900" }}>05</p>
								<p>TEXT</p>
							</div>
						</div>
					</div>
					<div className="working_text">
						<div className="text-area right_side sixth_text">
							What is the goal of the website? Is it a portfolio,
							blog, e-commerce site, or informational platform?
							Understand the interest of audience.Study other websites
							in the same niche for inspiration and insights.
						</div>
						<div className="timeline_cont right-container">
							<div className="text-box" style={{ padding: "2rem" }}>
								<p style={{ fontWeight: "900" }}>06</p>
								<p>LAUNCH</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
