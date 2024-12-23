import { useState } from "react";
import { Outlet } from "react-router-dom";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import BossProgression from "../../components/BossProgressionButton";

import meleeIcon from "../../assets/classes/melee-icon.svg";
import moonLordIcon from "../../assets/progression/moonlord-icon.svg";
import hardmodeIcon from "../../assets/progression/hardmode-icon.svg";
import preHardmodeIcon from "../../assets/progression/prehardmode-icon.svg";

import "./styles.css";
import { SidebarContext } from "../../utils/SidebarContext";

interface ClassSetupProps {
	classType: string;
}

const ClassSetupPage = (props: ClassSetupProps) => {
	const [isSidebar, setIsSidebar] = useState(false);

	useGSAP(
		() => {
			if (!isSidebar) {
				return;
			}

			gsap.to("#root", {
				flexDirection: "row",
				justifyContent: "space-between",
			});

			gsap.to(".boss-progression--container", {
				height: "100vh",
				width: "6rem",
				backgroundColor: "var(--sidebar-bg-color)",
				ease: "sine.in",
			});

			gsap.to(".boss-progression--button-container", {
				flexDirection: "column",
				alignItems: "center",
				width: "6rem",
				ease: "sine.in",
			});

			gsap.set(".boss-progression--button", {
				className: "boss-progression--side-button",
				ease: "sine.in",
			});
		},
		{ dependencies: [isSidebar] }
	);

	return (
		<div className="class-setups-page">
			<div className="boss-progression--container">
				{isSidebar ? (
					<img src={meleeIcon} alt={props.classType} width={75} />
				) : (
					<h1 id="class-setup--h1">{props.classType}</h1>
				)}
				<div className="boss-progression--button-container">
					<SidebarContext.Provider
						value={{ isSidebar, setIsSidebar }}
					>
						<BossProgression
							progressionState="Pre-Hardmode"
							progressIcon={preHardmodeIcon}
							selectedClass={props.classType.toLowerCase()}
						/>
						<BossProgression
							progressionState="Hardmode"
							progressIcon={hardmodeIcon}
							selectedClass={props.classType.toLowerCase()}
						/>
						<BossProgression
							progressionState="Post-Moon Lord"
							progressIcon={moonLordIcon}
							selectedClass={props.classType.toLowerCase()}
						/>
					</SidebarContext.Provider>
				</div>
			</div>
			{isSidebar ? <Outlet /> : null}
		</div>
	);
};

export default ClassSetupPage;
