import React from "react";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="col-lg-4">
			<div className="testimonial-card p-xl-5 p-4 my-lg-0 my-2">
				<p className="mess mb-lg-5 pb-2">{testimonial.quote}</p>
				<div className="author-info px-xl-4">
					<img src={testimonial.img} alt="" />
					<div>
						<h5 className="author">{testimonial.name}</h5>
						<h6 className="designation">{testimonial.from}</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
