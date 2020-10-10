import React from "react";
import "./Testimonial.css";
import wilson from "../../../images/person-1.png";
import ema from "../../../images/person-2.png";
import aliza from "../../../images/person-3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
	const testimonialData = [
		{
			quote:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
			name: "Wilson Harry",
			from: "California",
			img: wilson,
		},
		{
			quote:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
			name: "Ema Gomez",
			from: "California",
			img: ema,
		},
		{
			quote:
				"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content",
			name: "Aliza Farari",
			from: "California",
			img: aliza,
		},
	];
	return (
		<section className="testimonial px-xl-5 mx-xl-5">
			<div className="container-fluid py-xl-5 pt-5 my-lg-5">
				<div className="pt-xl-5 mt-xl-2">
					<h5 className="section-subtitle">TESTIMONIAL</h5>
					<h2 className="section-title">What’s Our Patients Says</h2>
				</div>
				<div className="testimonial-content pt-xl-5 pt-2 mt-5">
					<div className="row pt-xl-5 mt-xl-5">
						{testimonialData.map((testimonial) => (
							<TestimonialCard testimonial={testimonial} key={Math.random()}></TestimonialCard>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
