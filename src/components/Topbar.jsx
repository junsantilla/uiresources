import { useEffect, useState } from "react";
import { FaGithub, FaStar } from "react-icons/fa";
import { themeChange } from "theme-change";

function Topbar({ title, drawerButton }) {
	useEffect(() => {
		themeChange(false);
	}, []);

	const [stars, setStars] = useState([]);

	const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

	const fetchRepo = async () => {
		const response = await fetch(
			`https://api.github.com/repos/junsantilla/uiresources.io`,
			{
				headers: {
					Authorization: `token ${GITHUB_TOKEN}`,
				},
			}
		);

		const data = await response.json();
		setStars(data.stargazers_count);
	};

	fetchRepo();

	return (
		<div className="flex w-full flex-col lg:flex-row justify-between md:items-center bg-base-200 p-8 py-5">
			<h1 className="font-bold text-xl md:text-2xl lg:grow">{title}</h1>

			<div className="flex items-center mt-4 lg:mt-0">
				{drawerButton}
				<select
					className="gradientselect mr-3 select"
					data-choose-theme
				>
					<option disabled value="">
						Pick a theme
					</option>
					<option value="lofi">Lofi</option>
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
				<a
					href="https://github.com/junsantilla/uiresources.io/stargazers"
					target="_blank"
					rel="noreferrer"
				>
					<button className="btn btn-primary ml-3">
						<FaStar className="mr-2" />
						{stars}
					</button>
				</a>
			</div>
		</div>
	);
}

export default Topbar;
