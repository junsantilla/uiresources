import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Collections from "./pages/Collections";
import NavData from "./data/NavData";

function App() {
	const [nav] = useState(NavData);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<About title="About" />} />
				{nav.map((item, i) => (
					<Route
						key={i}
						path={"/collections" + item.path}
						element={<Collections title={item.title} />}
					/>
				))}
			</Routes>
		</Router>
	);
}

export default App;
