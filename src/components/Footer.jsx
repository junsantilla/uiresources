import React from "react";
import { FaBug, FaHeartbeat } from "react-icons/fa";
import { BiGitPullRequest } from "react-icons/bi";

function Footer() {
	return (
		<footer className=" bg-base-200 p-8 py-10">
			<div className="flex align-middle mb-1">
				<FaBug className="inline m-1 mr-2 text-md" />
				<p>
					Do you see a bug?{" "}
					<a
						href="https://github.com/junsantilla/uiResources.io/issues"
						className="underline"
						target="_blank"
						rel="noreferrer"
					>
						Open an issue on GitHub
					</a>
				</p>
			</div>

			<div className="flex align-middle mb-1">
				<BiGitPullRequest className="inline m-1 mr-2 text-md" />
				<p>
					Do you want to contribute?{" "}
					<a
						href="https://github.com/junsantilla/uiResources.io/pulls"
						className="underline"
						target="_blank"
						rel="noreferrer"
					>
						Pull request on Github
					</a>
				</p>
			</div>
			<div className="flex align-middle mb-1">
				<FaHeartbeat className="inline m-1 mr-2 text-md" />
				<p>
					Do you like uiResources.io?{" "}
					<a
						href="https://twitter.com/intent/tweet?text=A%20huge%20collection%20of%20UI%20resources%20https://github.com/junsantilla/uiResources.io"
						className="underline"
						target="_blank"
						rel="noreferrer"
					>
						Tweet about it!
					</a>
				</p>
			</div>

			<a href="https://www.hitwebcounter.com" target="_blank">
				<img
					src="https://hitwebcounter.com/counter/counter.php?page=8085148&style=0007&nbdigits=5&type=ip&initCount=318"
					title="Free Counter"
					Alt="web counter"
					border="0"
				/>
			</a>
		</footer>
	);
}

export default Footer;
