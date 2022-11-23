import React from "react";
import Footer from "../components/Footer";
import Container from "../components/layout/Container";
import Topbar from "../components/Topbar";

function About({ title }) {
	return (
		<Container>
			<Topbar title={title} />
			<div className="p-8 grow">
				<p>A huge collection of UI resources.</p>
			</div>
			<Footer />
		</Container>
	);
}

export default About;
