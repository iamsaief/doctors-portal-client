import React from "react";
import FooterList from "./FooterList";
import "./Footer.css";

const Footer = () => {
	const noNamed = [
		{ name: "Emergency Dental Care", link: "/emergency" },
		{ name: "Check Up", link: "/checkup" },
		{ name: "Treatment of Personal Diseases", link: "/personal-treatment" },
		{ name: "Tooth Extraction", link: "/tooth-extract" },
		{ name: "Check Up", link: "/checkup" },
	];
	const ourAddress = [
		{ name: "New York - 101010 Hudson", link: "//google.com/map" },
		{ name: "Yards", link: "//google.com/map" },
	];
	const oralHealth = [
		{ name: "Emergency Dental Care", link: "/emergency" },
		{ name: "Check Up", link: "/checkup" },
		{ name: "Treatment of Personal Diseases", link: "/personal-treatment" },
		{ name: "Tooth Extraction", link: "/tooth-extract" },
		{ name: "Check Up", link: "/checkup" },
		{ name: "Check Up", link: "/checkup" },
		{ name: "Check Up", link: "/checkup" },
	];
	const services = [
		{ name: "Emergency Dental Care", link: "/emergency" },
		{ name: "Check Up", link: "/checkup" },
		{ name: "Treatment of Personal Diseases", link: "/personal-treatment" },
		{ name: "Tooth Extraction", link: "/tooth-extract" },
		{ name: "Check Up", link: "/checkup" },
		{ name: "Check Up", link: "/checkup" },
		{ name: "Check Up", link: "/checkup" },
	];

	return (
		<footer className="footer-section px-xl-5 pt-xl-5">
			<div className="container-fluid">
				<div className="row pt-xl-5 pt-5">
					<FooterList key={1} menuTitle={""} menuItems={noNamed}></FooterList>
					<FooterList key={2} menuTitle="Services" menuItems={services}></FooterList>
					<FooterList key={3} menuTitle="Oral Health" menuItems={oralHealth}></FooterList>
					<FooterList key={4} menuTitle="Our Addresses" menuItems={ourAddress}>
						<div className="social-links d-flex mt-5">
							<a href="//facebook.com">
								<i className="fab fa-facebook-f"></i>
							</a>
							<a href="//twitter.com">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="//instagram.com">
								<i className="fab fa-instagram"></i>
							</a>
						</div>
						<div className="call-now mt-5 pt-5">
							<h6 className="list-item">Call now</h6>
							<button className="btn btn-primary">+2025550295</button>
						</div>
					</FooterList>
				</div>
				<div className="copyright text-center py-3 mt-5">
					<p>
						&copy; {new Date().getFullYear()} | build with <small>❤️</small> by{" "}
						<a href="https://www.linkedin.com/in/saiefalemon/" target="_blank" rel="noopener noreferrer">
							Saief Al Emon
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
