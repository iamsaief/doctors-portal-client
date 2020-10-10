import React from "react";
import Footer from "../../Footer/Footer";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import FeaturedService from "../FeaturedService/FeaturedService";
import HeroSection from "../HeroSection/HeroSection";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
	return (
		<>
			<HeroSection></HeroSection>
			<Services></Services>
			<FeaturedService></FeaturedService>
			<MakeAppointment></MakeAppointment>
			<Testimonial></Testimonial>
			<Blog></Blog>
			<Doctors></Doctors>
			<Contact></Contact>
			<Footer></Footer>
		</>
	);
};

export default Home;
