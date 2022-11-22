import React from "react";
import { FaGithub } from "react-icons/fa";

function Topbar() {
	return (
		<div className="flex w-full justify-end bg-base-200 p-8 py-5">
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
