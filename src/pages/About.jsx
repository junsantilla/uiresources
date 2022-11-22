import React from "react";
import Topbar from "../components/Topbar";

function About() {
	return (
		<div className="w-4/5 overflow-auto fixed right-0 h-screen">
			<Topbar />
			<div className="p-8">
				<h1 className="text-2xl font-bold mb-4">About</h1>
				<p>A huge collection of UI resources.</p>
			</div>
		</div>
	);
}

export default About;
