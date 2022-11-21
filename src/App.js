import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<div className="flex justify-end">
				<div className="w-1/5 overflow-auto left-0 overflow-y-auto h-screen fixed">
					<Navbar />
				</div>
				<div className="w-4/5 p-8 border border-base-200 justify-self-end min-h-screen">
					<div className="overflow-x-auto">
						<table className="table w-full">
							<thead>
								<tr>
									<th>Name</th>
									<th>Description</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr className="hover">
									<td>UI Design Daily</td>
									<td>Awesome UI Components of all types</td>
									<td className="flex justify-end">
										<button className="btn">Visit</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
