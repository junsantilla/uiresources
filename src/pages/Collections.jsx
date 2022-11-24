import { useState } from "react";
import CollectionsData from "../data/CollectionsData";
import { useLocation } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Topbar from "../components/Topbar";
import DrawerButton from "../components/DrawerButton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Collections({ title }) {
	const [collections] = useState(CollectionsData);
	const location = useLocation().pathname.substring(13);

	const filtered = collections.filter((collection) => {
		return collection.category === location;
	});

	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<Topbar title={title} drawerButton={<DrawerButton />} />
				<div className="p-8 grow">
					{filtered.map((item, i) => (
						<div className="mobile-list lg:hidden" key={i}>
							<div className="flex justify-between border-b border-base-200 hover:bg-base-200">
								<div>
									<div className="font-bold  p-3 px-4 pr-10">
										<div className="text-lg">
											{item.website}
										</div>
										<div className="font-normal text-md">
											{item.description}
										</div>
									</div>
								</div>

								<div className="p-4 flex items-center">
									<a
										href={item.url}
										target="_blank"
										title="Visit"
										rel="noreferrer"
									>
										<FaExternalLinkAlt />
									</a>
								</div>
							</div>
						</div>
					))}
					<table className="table-auto w-full hidden lg:block">
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
									<td className="w-4/6">
										{item.description}
									</td>
									<td className="flex justify-end p-3">
										<a
											href={item.url}
											target="_blank "
											className="w-max"
											rel="noreferrer"
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
				<Footer />
			</div>
			<Navbar />
		</div>
	);
}

export default Collections;
