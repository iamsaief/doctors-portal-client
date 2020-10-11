import React, { useState } from "react";
import AppointmentForm from "./AppointmentForm";

const BookingCard = ({ booking, date }) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className="col-lg-4 col-md-6">
			<div className="booking-card p-xl-5 p-3 pb-4 my-4">
				<h3 className="subject">{booking.subject}</h3>
				<h4 className="visitingHour">{booking.visitingHour}</h4>
				<h5 className="totalSpace">{booking.totalSpace} SPACES AVAILABLE</h5>
				<button className="btn btn-primary" onClick={openModal}>
					Book appointment
				</button>
				<AppointmentForm
					modalIsOpen={modalIsOpen}
					openModal={openModal}
					closeModal={closeModal}
					appointmentName={booking.subject}
					date={date}
				></AppointmentForm>
			</div>
		</div>
	);
};

export default BookingCard;
