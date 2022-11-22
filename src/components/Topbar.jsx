import React from "react";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { themeChange } from "theme-change";

function Topbar() {
	useEffect(() => {
		themeChange(false);
	}, []);

	return (
		<div className="flex w-full justify-end items-center bg-base-200 p-8 py-5">
			<select className="gradientselect mr-5 select" data-choose-theme>
				<option disabled value="">
					Pick a theme
				</option>
				<option value="cyberpunk">Cyberpunk</option>
				<option value="light">Light</option>
				<option value="dark">Dark</option>
				<option value="cupcake">Cupcake</option>
				<option value="retro">Retro</option>
				<option value="dracula">Dracula</option>
				<option value="coffee">Coffee</option>
				<option value="business">Business</option>
			</select>
			<a
				href="https://github.com/junsantilla/uiResources.io"
				title="Github"
				target="_blank"
			>
				<FaGithub className="text-3xl hover:text-primary" />
			</a>
		</div>
	);
}

export default Topbar;
