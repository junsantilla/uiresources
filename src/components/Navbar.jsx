import NavData from "../data/NavData";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
	const nav = NavData;

	const location = useLocation();

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true;
		}
	};

	return (
		<div className="drawer-side lg:w-80">
			<label htmlFor="my-drawer" className="drawer-overlay"></label>
			<div className="px-4 py-6 bg-base-100 mr-20 lg:mr-0">
				<div className=" flex justify-between">
					<Link
						to="/"
						onClick={() => {
							document.getElementById("my-drawer").click();
						}}
						className="font-bold text-lg hover:underline inline self-center"
					>
						uiResources
					</Link>
				</div>
				<nav className="mt-6 flex flex-col space-y-1 mb-8">
					{nav.map((item, i) => (
						<Link
							key={i}
							to={"/collections" + item.path}
							onClick={() => {
								document.getElementById("my-drawer").click();
							}}
							className={
								pathMatchRoute("/collections" + item.path)
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
