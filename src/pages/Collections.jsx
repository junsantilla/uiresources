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
						<div className="mobile-list" key={i}>
							<div className="flex justify-between border-b border-base-300 hover:bg-base-200">
								<div className="font-bold  p-4 pr-10">
									<div className="text-lg">
										{item.website}
									</div>
									<div className="font-normal text-sm mt-1">
										{item.description}
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
				</div>
				<Footer />
			</div>
		</>
	);
}

export default Collections;
