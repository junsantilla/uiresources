import React from "react";
import Navbar from "../Navbar";
import DrawerButton from "../DrawerButton";
import Topbar from "../Topbar";
import Footer from "../Footer";
import Collections from "../../pages/Collections";

function Container({ title }) {
	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<Topbar title={title} drawerButton={<DrawerButton />} />
				<div className="p-8 grow">
					<Collections />
				</div>
				<Footer />
			</div>
			<Navbar />
		</div>
	);
}

export default Container;
