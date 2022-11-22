import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Collections from "./pages/Collections";
import NavData from "./data/NavData";

function App() {
	const [nav] = useState(NavData);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<About title="About" />} />
				{nav.map((item, i) => (
					<Route
						key={i}
						path={item.path}
						element={<Collections title={item.title} />}
					/>
				))}
			</Routes>
		</Router>
	);
}

export default App;
