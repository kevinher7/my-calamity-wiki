import { useContext } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { SidebarContext } from "../../utils/SidebarContext";

interface BossProgressionProps {
	progressionState: string;
	progressIcon: string;
}

const BossProgression = (props: BossProgressionProps) => {
	const sidebarContext = useContext(SidebarContext);

	const { isSidebar, setIsSidebar } = sidebarContext;

	const handleClick = () => {
		if (setIsSidebar) {
			setIsSidebar(true);
			console.log(isSidebar);
			return;
		}
		console.error("setIsSidebar is not defined");
	};

	return (
		<Link
			to={`/${props.progressionState.replace(/\s/g, "")}`}
			className="boss-progression--button"
			onClick={handleClick}
			data-sidebar={isSidebar}
		>
			{isSidebar ? (
				<img
					src={props.progressIcon}
					alt={props.progressionState}
					width={70}
				/>
			) : (
				props.progressionState
			)}
		</Link>
		// <button
		// 	className="boss-progression--button"
		// 	onClick={handleClick}
		// 	data-sidebar={isSidebar}
		// >
		// 	{isSidebar ? (
		// 		<img
		// 			src={props.progressIcon}
		// 			alt={props.progressionState}
		// 			width={70}
		// 		/>
		// 	) : (
		// 		props.progressionState
		// 	)}
		// </button>
	);
};

export default BossProgression;
