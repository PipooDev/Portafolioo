import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, logo2, logo3, title, description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link rel="noreferrer" target="_blank" to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
							<img src={logo2} alt="logo" />
							<img src={logo3} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
						<br />
						<div style={{ textAlign: "center" }}>
							<center>
								<img
									style={{ maxWidth: "800px" }}
									src="project1.png"
									alt="about"
								/>
							</center>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
