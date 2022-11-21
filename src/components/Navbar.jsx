import { useState } from "react";
import NavData from "../data/NavData";
import { Link } from "react-router-dom";

function Navbar() {
	const [nav, setNav] = useState(NavData);

	return (
		<div className="w-1/5 overflow-auto left-0 overflow-y-auto h-screen fixed mb-10">
			<div className="flex flex-col justify-between">
				<div className="px-4 py-6">
					<Link to="/" className="font-bold text-lg">
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
								className="flex items-center text-sm bg-base-200 hover:bg-base-300 px-4 py-2"
							>
								{item.title}
							</Link>
						))}
					</nav>
				</div>
				{/* footer */}
			</div>
		</div>
	);
}

export default Navbar;
