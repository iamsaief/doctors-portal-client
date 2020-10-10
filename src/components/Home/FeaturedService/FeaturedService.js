import React from "react";
import featuretImg from "../../../images/patient.png";
import "./FeaturedService.css";

const FeaturedService = () => {
	return (
		<section className="container-fluid py-5 my-lg-5">
			<div className="feature-service px-xl-5 mx-xl-5">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<img src={featuretImg} alt="feature patient" className="img-fluid" />
					</div>
					<div className="col-lg-7">
						<div className="px-xl-5 mr-xl-5 mt-xl-0 mt-4">
							<h3 className="section-title mb-3">Exceptional Dental Care, on Your Terms</h3>
							<p className="mb-5 pb-3">
								It is a long established fact that a reader will be distracted by the readable content
								of a page when looking at its layout. The point of using Lorem Ipsumis that it has a
								more-or-less normal distribution of letters,as opposed to using ‘Content here, content
								here’, making it look like readable English. Many desktop publishing packages and web
								page{" "}
							</p>
							<button className="btn btn-primary">Learn More</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedService;
