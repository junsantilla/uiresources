import { useState } from "react";
import NavData from "../data/NavData";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
	const [nav, setNav] = useState(NavData);

	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<div className="w-1/5 overflow-auto fixed h-screen">
			<div className="px-4 py-6">
				<Link to="/" className="font-bold text-lg hover:underline">
					uiResources.io
				</Link>
				<nav
					aria-label="Main Nav"
					className="mt-6 flex flex-col space-y-1"
				>
					{nav.map((item, i) => (
						<Link
							key={i}
							to={item.path}
							className={
								pathMatchRoute(item.path)
									? "flex items-center text-sm px-4 py-2 font-bold bg-primary text-base-100"
									: "flex items-center text-sm px-4 py-2 font-bold bg-base-200 hover:bg-base-300"
							}
						>
							{item.title}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
