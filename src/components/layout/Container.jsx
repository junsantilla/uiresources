import React from "react";

function Container({ children }) {
	return (
		<div className="flex flex-col w-4/5 overflow-auto fixed right-0 h-screen">
			{children}
		</div>
	);
}

export default Container;
