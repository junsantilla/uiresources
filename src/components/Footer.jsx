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
						href="https://github.com/junsantilla/uiResources/issues"
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
						href="https://github.com/junsantilla/uiResources/pulls"
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
					Do you like uiResources?{" "}
					<a
						href="https://twitter.com/intent/tweet?text=A%20huge%20collection%20of%20UI%20resources%20https://github.com/junsantilla/uiResources"
						className="underline"
						target="_blank"
						rel="noreferrer"
					>
						Tweet about it!
					</a>
				</p>
			</div>
		</footer>
	);
}

export default Footer;
