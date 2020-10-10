import React from "react";
import { Link } from "react-router-dom";

const FooterList = (props) => {
	return (
		<div className="col-lg-3 col-sm-6">
			<div className="footer-list">
				<h6 className={props.menuTitle ? "list-title" : "no-title"}>
					{props.menuTitle ? props.menuTitle : "no-title"}
				</h6>
				<ul className="list-unstyled">
					{props.menuItems.map((item, index) => (
						<li key={index}>
							<Link to={item.link} className="list-item">
								{item.name}
							</Link>
						</li>
					))}
				</ul>
				{props.children && props.children}
			</div>
		</div>
	);
};

export default FooterList;
