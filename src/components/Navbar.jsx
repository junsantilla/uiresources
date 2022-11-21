import { useState } from "react";
import NavData from "../data/NavData";

function Navbar() {
	const [nav, setNav] = useState(NavData);

	return (
		<div className="flex flex-col justify-between">
			<div className="px-4 py-6">
				<p className="font-bold text-lg">uiResources.io</p>
				<nav
					aria-label="Main Nav"
					className="mt-6 flex flex-col space-y-1"
				>
					{nav.map((item) => (
						<a
							key={item.id}
							href="#test"
							className="flex items-center bg-base-200 hover:bg-base-300 px-4 py-2"
						>
							{item.title}
						</a>
					))}
				</nav>
			</div>
			<div className="sticky inset-x-0 border-base-200 border-t ">
				{/* footer */}
			</div>
		</div>
	);
}

export default Navbar;
