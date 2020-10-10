import React from "react";
import author1 from "../../../images/person-1.png";
import author2 from "../../../images/person-2.png";
import author3 from "../../../images/person-3.png";
import BlogCard from "./BlogCard";
import "./Blog.css";

const Blog = () => {
	const blogData = [
		{
			title: "Check at least a doctor in a year for your teeth",
			description: "It is a long established fact that by the readable content of a lot layout. The point ",
			author: "Rashed Kabir",
			authorImg: author3,
			date: "23 April 2019",
		},
		{
			title: "2 times of brush in a day can Keep you healthy",
			description: "It is a long established fact that by the readable content of a lot layout. The point ",
			author: "Dr. Caudi",
			authorImg: author2,
			date: "23 April 2019",
		},
		{
			title: "The tooth cancer is taking a challenge",
			description: "It is a long established fact that by the readable content of a lot layout. The point ",
			author: "Dr. John Mitchel",
			authorImg: author1,
			date: "23 April 2019",
		},
	];
	return (
		<section className="blog p-xl-5 m-xl-5">
			<div className="container-fluid">
				<div className="text-center pt-xl-5 mt-xl-2 pt-5">
					<h5 className="section-subtitle">Our Blog</h5>
					<h2 className="section-title">From Our Blog News</h2>
				</div>
				<div className="row pt-5 mt-xl-5 ">
					{blogData.map((blog) => (
						<BlogCard blog={blog} key={Math.random()}></BlogCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
