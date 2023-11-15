import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							El desarrollo web es realmente increíble, tengo
							tantas ideas por desarrollar.
						</div>

						<div className="subtitle projects-subtitle">
							Desde pequeño me ha interesado la programación, y he
							estudiado las bases de manera autodidacta para
							embarcarme a explorar las distintas áreas para
							estudiar lo básico, como lo son desarrollo de
							videojuegos en 2D y 3D (también he aprendido a
							modelar 3D), aplicaciones nativas tanto para Android
							usando Android Studio tanto para iOS usando Xcode,
							proyectos con Arduino, etc. Por ahora he decidido
							enfocarme en el desarrollo web y estar al corriente
							con las tecnologías más eficientes y recomendadas.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
