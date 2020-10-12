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
		<section className="container-fluid px-xl-5">
			<div className="business-info px-xl-5 mx-xl-5">
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
