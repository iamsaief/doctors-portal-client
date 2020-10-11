import React from "react";
import chair from "../../../images/chair-1.png";

const HeroMain = () => {
	return (
		<main className="hero-main container-fluid py-5 my-lg-5">
			<div className="row py-5">
				<div className="col-lg-5">
					<div className="main-content px-xl-5 pb-5">
						<h1>Your New Smile Starts Here</h1>
						<p className="mt-3 mb-5">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
							been the industry’s standard dummy text ever since the
						</p>
						<button className="btn btn-primary">Get appointment</button>
					</div>
				</div>
				<div className="col-lg-6 offset-lg-1">
					<img src={chair} alt="chair" className="img-fluid pr-lg-5" />
				</div>
			</div>
		</main>
	);
};

export default HeroMain;
