import { useEffect, useState } from "react";
import SetupComponent from "../SetupComponent";

import "./styles.css";
import { simpleClassSetup } from "../../interfaces/classSetups";

interface SetupsDisplayProps {
	selectedClass: "Melee" | "Ranged" | "Magic" | "Summoning" | "Rogue";
	currentGameProgression: "preHardmode" | "hardmode" | "postMoonLord";
}

interface classSetupData {
	gameState: string;
	Melee: simpleClassSetup;
	Ranged: simpleClassSetup;
	Magic: simpleClassSetup;
	Summoning: simpleClassSetup;
	Rogue: simpleClassSetup;
}

interface fetchedData {
	preHardmode: classSetupData[];
	hardmode: classSetupData[];
	postMoonLord: classSetupData[];
}

const SetupsDisplay = (props: SetupsDisplayProps) => {
	const [fetchedSetupsData, setFetchedSetupsData] = useState<fetchedData>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/api/get-class-setups");
				const result = await response.json();
				setFetchedSetupsData(result);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<main className="setups-display">
			{fetchedSetupsData ? (
				fetchedSetupsData[props.currentGameProgression].map(
					(setupData) => {
						return (
							<SetupComponent
								key={setupData["gameState"]}
								gameState={setupData["gameState"]}
								classSetup={setupData[props.selectedClass]}
							/>
						);
					}
				)
			) : (
				<h1>Nos Funaron 😔</h1>
			)}
		</main>
	);
};

export default SetupsDisplay;
