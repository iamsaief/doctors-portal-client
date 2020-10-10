import React from "react";
import InfoCard from "./InfoCard";

const BusinessInfo = () => {
	const infosData = [
		{
			title: "Opening Hours",
			description: "We are open 7 days",
			icon: "far fa-clock",
		},
		{
			title: "Visit Our Location",
			description: "Brooklyn, NY 10003 USA",
			icon: "fas fa-map-marker-alt",
		},
		{
			title: "Call us now",
			description: "+15697854124",
			icon: "fas fa-phone-volume",
		},
	];

	return (
		<section className="container-fluid px-lg-5">
			<div className="business-info px-lg-5 mx-lg-5">
				<div className="row">
					{infosData.map((info) => (
						<InfoCard key={Math.random()} info={info}></InfoCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default BusinessInfo;
