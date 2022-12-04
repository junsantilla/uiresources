import CollectionsData from "../data/CollectionsData";
import { useLocation } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import Topbar from "../components/Topbar";
import DrawerButton from "../components/DrawerButton";
import Footer from "../components/Footer";

function Collections({ title }) {
	const collections = CollectionsData;
	const location = useLocation().pathname.substring(13);

	const filtered = collections.filter((collection) => {
		return collection.category === location;
	});

	return (
		<>
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

					<div class="flex flex-col">
						{filtered.map((item, i) => (
							<div
								className="flex flex-row border-b border-base-200 py-2 items-center hover:bg-base-200"
								key={i}
							>
								<div className="w-2/6 p-4 py-2 font-bold">
									{item.website}
								</div>
								<div className="w-4/6 p-4 py-2">
									{item.description}
								</div>
								<div className="w-1/6 p-4 py-2 flex justify-end">
									<a
										href={item.url}
										target="_blank "
										className="w-max"
										rel="noreferrer"
									>
										<button className="btn btn-sm border-0 px-6  capitalize transition-none hover:text-primary-content hover:bg-primary hover:border-0">
											<span className="mr-2">
												<FaExternalLinkAlt />
											</span>
											Visit
										</button>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Collections;
