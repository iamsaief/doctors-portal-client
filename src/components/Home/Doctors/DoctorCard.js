import React from "react";

const DoctorCard = ({ doctor }) => {
	return (
		<div className="col-md-4">
			<div className="doctor-card text-center">
				<img src={doctor.img} alt="doctor" className="img-fluid" />
				<h4>{doctor.name}</h4>
				<h5>
					<i className="fas fa-phone"></i>
					{doctor.phone}
				</h5>
			</div>
		</div>
	);
};

export default DoctorCard;
