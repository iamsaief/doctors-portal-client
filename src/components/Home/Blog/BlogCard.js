import React from "react";
import arrow from "../../../images/arrow-icon.png";

const BlogCard = (props) => {
	const { title, description, author, authorImg, date } = props.blog;
	return (
		<div className="col-lg-4">
			<div className="blog-card p-xl-5 p-4 my-lg-0 my-2">
				<div className="author-info d-flex align-items-center mb-3">
					<img src={authorImg} alt="author" className="mr-4" />
					<div>
						<h5 className="author">{author}</h5>
						<h6 className="date">{date}</h6>
					</div>
				</div>
				<div className="post-body">
					<h4 className="mb-md-4 mb-2">{title}</h4>
					<h5>{description}</h5>
					<button className="btn">
						<img src={arrow} alt="" className="img-fluid" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default BlogCard;
