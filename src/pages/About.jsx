import React from "react";

function About() {
	return (
		<div className="flex justify-end">
			<div className="w-4/5 p-8 border border-base-200 justify-self-end min-h-screen">
				<h1 className="text-2xl font-bold mb-4">About</h1>
				<p>
					Theme:{" "}
					<a
						href="https://daisyui.com/docs/themes/"
						target="_blank"
						className="underline"
					>
						Cyberpunk
					</a>{" "}
				</p>
			</div>
		</div>
	);
}

export default About;
