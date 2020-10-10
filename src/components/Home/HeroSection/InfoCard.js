import React from "react";

const InfoCard = ({ info }) => {
	return (
		<div className="col-md-4">
			<div className="single-card p-lg-4 p-3 my-lg-0 my-2">
				<div className="icon">
					<i className={info.icon}></i>
				</div>
				<div>
					<h5>{info.title}</h5>
					<p>{info.description}</p>
				</div>
			</div>
		</div>
	);
};

export default InfoCard;
