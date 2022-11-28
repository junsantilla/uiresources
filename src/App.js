import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Collections from "./pages/Collections";
import NavData from "./data/NavData";
import Navbar from "./components/Navbar";

function App() {
	const nav = NavData;

	return (
		<Router>
			<div className="drawer drawer-mobile">
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
				<Navbar />
			</div>
		</Router>
	);
}

export default App;
