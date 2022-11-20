import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<div className="flex justify-end">
				<div className="w-1/5 overflow-auto left-0 overflow-y-auto h-screen fixed">
					<Navbar />
				</div>
				<div className="w-4/5 p-8 bg-slate-100 justify-self-end min-h-screen">
					Content
				</div>
			</div>
		</>
	);
}

export default App;
