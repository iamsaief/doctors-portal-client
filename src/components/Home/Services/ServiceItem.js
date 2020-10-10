import React from "react";

const ServiceItem = ({ service }) => {
	return (
		<div className="col-lg-4">
			<div className="service-item my-xl-0 my-4">
				<img src={service.icon} alt="service icon" style={{ width: "100px", height: "100px" }} />
				<h4 className="my-xl-4 mt-3">{service.title}</h4>
				<p>{service.description}</p>
			</div>
		</div>
	);
};

export default ServiceItem;
