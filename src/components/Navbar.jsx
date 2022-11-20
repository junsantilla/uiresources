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
							className="flex items-center rounded-lg bg-slate-100 hover:bg-slate-200 px-4 py-2"
						>
							{item.title}
						</a>
					))}
				</nav>
			</div>
			<div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
				{/* footer */}
			</div>
		</div>
	);
}

export default Navbar;
