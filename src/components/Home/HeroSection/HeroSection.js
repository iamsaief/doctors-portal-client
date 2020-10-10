import React from "react";
import NavMenu from "../../NavMenu/NavMenu";
import BusinessInfo from "./BusinessInfo";
import HeroMain from "./HeroMain";
import "./HeroSection.css";

const HeroSection = () => {
	return (
		<div className="dp-home">
			<NavMenu></NavMenu>
			<HeroMain></HeroMain>
			<BusinessInfo></BusinessInfo>
		</div>
	);
};

export default HeroSection;
