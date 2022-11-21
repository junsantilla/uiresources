import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Collections from "./pages/Collections";
import NavData from "./data/NavData";

function App() {
	const [nav, setNav] = useState(NavData);

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<About />} />
					{nav.map((item) => (
						<Route path={item.path} element={<Collections />} />
					))}
				</Routes>
			</Router>
		</>
	);
}

export default App;
