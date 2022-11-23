import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import DrawerButton from "../components/DrawerButton";

function About({ title }) {
	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<Topbar title={title} drawerButton={<DrawerButton />} />
				<div className="p-8 grow">
					<p>A huge collection of UI resources.</p>
				</div>
				<Footer />
			</div>
			<Navbar />
		</div>
	);
}

export default About;
