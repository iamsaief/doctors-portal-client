import React, { useState } from "react";
import Footer from "../../Footer/Footer";
import AppointmentBook from "../AppointmentBook/AppointmentBook";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import "./Appointment.css";

const Appointment = () => {
	document.title = "DP - Appointment";

	const [selectedDate, setSelectedDate] = useState(new Date());

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};

	return (
		<div className="dp-appointment-wrapper">
			<AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
			<AppointmentBook date={selectedDate}></AppointmentBook>
			<Footer></Footer>
		</div>
	);
};

export default Appointment;
