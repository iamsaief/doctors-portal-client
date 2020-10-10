import React from "react";
import icon1 from "../../../images/tooth-icon-1.png";
import icon2 from "../../../images/tooth-icon-2.png";
import icon3 from "../../../images/tooth-icon-3.png";
import ServiceItem from "./ServiceItem";
import "./Services.css";

const Services = () => {
	const serviceData = [
		{
			icon: icon1,
			title: "Fluoride Treatment",
			description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			icon: icon2,
			title: "Cavity Filling",
			description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			icon: icon3,
			title: "Teeth Whitening",
			description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
	];

	return (
		<section className="container-fluid py-5 my-lg-5 text-center">
			<div className="section-title pb-4">
				<h5 className="section-subtitle">OUR SERVICES</h5>
				<h2 className="section-title">Services We Provide</h2>
			</div>
			<div className="service-content p-xl-5 m-xl-5 my-4">
				<div className="row">
					{serviceData.map((service) => (
						<ServiceItem service={service} key={Math.random()}></ServiceItem>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
