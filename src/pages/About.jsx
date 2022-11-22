import React from "react";
import Topbar from "../components/Topbar";

function About({ title }) {
	return (
		<div className="w-4/5 overflow-auto fixed right-0 h-screen">
			<Topbar title={title} />
			<div className="p-8">
				<p>A huge collection of UI resources.</p>
			</div>
		</div>
	);
}

export default About;
