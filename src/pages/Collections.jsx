import { useState } from "react";
import CollectionsData from "../data/CollectionsData";
import { useLocation } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Topbar from "../components/Topbar";

function Collections({ title }) {
	const [collections] = useState(CollectionsData);
	const location = useLocation().pathname.substring(1);

	const filtered = collections.filter((collection) => {
		return collection.category === location;
	});

	return (
		<>
			<div className="w-4/5 overflow-auto fixed right-0 h-screen">
				<Topbar title={title} />
				<div className="p-8">
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
										<a
											href={item.url}
											target="_blank "
											className="w-max"
										>
											<button className="btn border-0 px-6  capitalize transition-none hover:text-primary-content hover:bg-primary hover:border-0">
												<span className="mr-2">
													<FaExternalLinkAlt />
												</span>
												Visit
											</button>
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default Collections;
