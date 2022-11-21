import { useState } from "react";
import CollectionsData from "../data/CollectionsData";
import { useLocation } from "react-router-dom";

function Icons() {
	const [collections, setCollections] = useState(CollectionsData);
	const loc = useLocation();
	const location = loc.pathname.substring(1);

	const filtered = collections.filter((collection) => {
		return collection.category === location;
	});

	return (
		<div className="flex justify-end">
			<div className="w-4/5 p-8 border justify-self-end min-h-screen">
				<div className="overflow-x-auto">
					<table className="table-auto w-full">
						<thead className="text-left bg-base-200">
							<tr className=" p-10">
								<th className=" p-5">Name</th>
								<th>Description</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{filtered.map((item, i) => (
								<tr
									className="border-b border-base-200 hover:bg-base-200 "
									key={i}
								>
									<td className="font-bold p-2 px-5 pr-14">
										{item.website}
									</td>
									<td>{item.description}</td>
									<td className="flex justify-end p-3">
										<button className="btn">Visit</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Icons;
