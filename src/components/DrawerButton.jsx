import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function DrawerButton() {
	return (
		<label htmlFor="my-drawer">
			<label
				htmlFor="my-drawer"
				className="btn btn-primary drawer-button lg:hidden mr-3"
			>
				<GiHamburgerMenu />
			</label>
		</label>
	);
}

export default DrawerButton;
