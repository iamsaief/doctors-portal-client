import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./AppointmentForm.css";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		border: "1px solid #707070",
		borderRadius: "36px",
		width: "calc(100% - 30px)",
		maxWidth: "800px",
		padding: "50px",
	},
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, openModal, closeModal, appointmentName, date }) => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		closeModal();
	};

	return (
		<Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
			<div className="appointment-form">
				{/* <button onClick={closeModal} className="btn btn-primary modal-close">
					<i className="fas fa-times"></i>
				</button> */}
				<h3 className="subtitle mb-0">{appointmentName}</h3>
				<p className="text-secondary text-center mb-3">
					<small>ON {date.toDateString()}</small>
				</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<input
							type="text"
							ref={register({ required: true })}
							name="name"
							className="form-control"
							placeholder="Your Name"
						/>
						{errors.name && <span className="text-danger">Valid name is required</span>}
					</div>

					<div className="form-group">
						<input
							type="tel"
							ref={register({ required: true })}
							name="phone"
							placeholder="Phone Number"
							className="form-control"
						/>
						{errors.phone && <span className="text-danger">This field is required</span>}
					</div>

					<div className="form-group">
						<input
							type="email"
							ref={register({ required: true })}
							name="email"
							placeholder="Email"
							className="form-control"
						/>
						{errors.email && <span className="text-danger">This field is required</span>}
					</div>

					<div className="form-group row">
						<div className="col-4">
							<select className="form-control" name="gender" ref={register({ required: true })}>
								<option disabled={true} value="Not set">
									Select Gender
								</option>
								<option value="Male">Male</option>
								<option value="Female">Female</option>
								<option value="Not set">Other</option>
							</select>
							{errors.gender && <span className="text-danger">This field is required</span>}
						</div>
						<div className="col-4">
							<input
								ref={register({ required: true })}
								className="form-control"
								name="age"
								placeholder="Your Age"
								type="number"
							/>
							{errors.age && <span className="text-danger">This field is required</span>}
						</div>
						<div className="col-4">
							<input
								ref={register({ required: true })}
								className="form-control"
								name="weight"
								placeholder="Weight"
								type="number"
							/>
							{errors.weight && <span className="text-danger">This field is required</span>}
						</div>
					</div>

					<div className="form-group text-right">
						<button type="submit" className="btn btn-primary appointment-submit">
							Send
						</button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default AppointmentForm;
