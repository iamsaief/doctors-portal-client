import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../images/doctor.png";

const MakeAppointment = () => {
	return (
		<section className="make-appointment">
			<div className="container-fluid">
				<div className="row flex-lg-row flex-column-reverse">
					<div className="col-lg-5">
						<img src={doctor} alt="doctor" className="" />
					</div>
					<div className="col-lg-7">
						<div className="make-appointment-content pt-lg-0 pt-5">
							<h5 className="section-subtitle">APPOINTMENT</h5>
							<h2 className="section-title text-white">Make an appointment Today</h2>
							<p className="text-white mb-5">
								It is a long established fact that a reader will be distractedly the readable content of
								a page when looking at its
							</p>
							<button className="btn btn-primary">Learn more</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MakeAppointment;
