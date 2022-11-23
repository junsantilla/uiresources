import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { themeChange } from "theme-change";

function Topbar({ title, drawerButton }) {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className="flex w-full flex-col lg:flex-row justify-between items-center bg-base-200 p-8 py-5">
			<h1 className="font-bold text-2xl lg:grow">{title}</h1>

			<div className="flex items-center mt-4 lg:mt-0">
				{drawerButton}
				<select
					className="gradientselect mr-3 select"
					data-choose-theme
				>
					<option disabled value="">
						Pick a theme
					</option>
					<option value="cupcake">Cupcake</option>
					<option value="cyberpunk">Cyberpunk</option>
					<option value="light">Light</option>
					<option value="dark">Dark</option>
					<option value="retro">Retro</option>
					<option value="dracula">Dracula</option>
					<option value="coffee">Coffee</option>
					<option value="business">Business</option>
				</select>
				<a
					href="https://github.com/junsantilla/uiResources.io"
					title="Github"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub className="text-5xl hover:text-primary" />
				</a>
			</div>
		</div>
	);
}

export default Topbar;
