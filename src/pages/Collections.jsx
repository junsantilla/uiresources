import React from "react";

function Icons() {
	return (
		<div className="flex justify-end">
			<div className="w-4/5 p-8 border justify-self-end min-h-screen">
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
								<td className="font-bold">UI Design Daily</td>
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
	);
}

export default Icons;
