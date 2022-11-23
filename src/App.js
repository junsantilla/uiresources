import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Container from "./components/layout/Container";
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
						path={item.path}
						element={<Container title={item.title} />}
					/>
				))}
			</Routes>
		</Router>
	);
}

export default App;
