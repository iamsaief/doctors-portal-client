import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<section className="contact py-5 my-lg-5">
			<div className="container-fluid">
				<div className="text-center py-lg-5 mb-xl-5 pb-5">
					<h5 className="section-subtitle">CONTACT US</h5>
					<h2 className="section-title text-white">Always Connect with us</h2>
				</div>
				<div className="contact-form mx-auto">
					<form action="">
						<div className="form-group">
							<input
								type="email"
								name="email"
								className="form-control"
								placeholder="Email Address*"
								required={true}
							/>
						</div>
						<div className="form-group">
							<input
								type="text"
								name="email"
								className="form-control"
								placeholder="Subject*"
								required={true}
							/>
						</div>
						<div className="form-group">
							<textarea
								name="message"
								className="form-control"
								placeholder="Your Message*"
								required={true}
							></textarea>
						</div>
						<div className="form-group text-center">
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
