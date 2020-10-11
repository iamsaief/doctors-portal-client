import React from "react";
import chair from "../../../images/chair-1.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import NavMenu from "../../NavMenu/NavMenu";
import "./AppointmentHeader.css";

const AppointmentHeader = ({ handleDateChange }) => {
	return (
		<main className="appointment-header container-fluid pt-5">
			<NavMenu></NavMenu>
			<div className="pt-5">
				<div className="row pt-xl-5 pt-3 mt-xl-5 mt-0">
					<div className="col-lg-6">
						<div className="main-content px-xl-5 pb-5">
							<h1>Appointment</h1>
							<div className="dp-calender mt-5">
								<Calendar onChange={handleDateChange} value={new Date()} />
							</div>
						</div>
					</div>
					<div className="col-lg-6 ">
						<img src={chair} alt="chair" className="img-fluid pr-lg-5" />
					</div>
				</div>
			</div>
		</main>
	);
};

export default AppointmentHeader;
