import React from "react";
import "./Doctors.css";
import doctorImg from "../../../images/doctor-sm.png";
import DoctorCard from "./DoctorCard";

const Doctors = () => {
	const doctorsData = [
		{
			name: "Dr. Caudi",
			img: doctorImg,
			phone: "+61 452 200 126",
		},
		{
			name: "Dr. Caudi",
			img: doctorImg,
			phone: "+61 452 200 126",
		},
		{
			name: "Dr. Caudi",
			img: doctorImg,
			phone: "+61 452 200 126",
		},
	];
	return (
		<section className="doctors p-5 mx-xl-5">
			<div className="container-fluid">
				<div className="text-center">
					<h5 className="section-subtitle">Our Doctors</h5>
				</div>
				<div className="row pt-5 my-xl-5">
					{doctorsData.map((doctor) => (
						<DoctorCard doctor={doctor} key={Math.random()}></DoctorCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Doctors;
