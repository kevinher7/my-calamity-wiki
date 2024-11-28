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

	// const [fetchedSetupsData, _setFetchedSetupsData] = useState<
	// 	classSetupData[]
	// >([
	// 	{
	// 		gameState: "Pre-Mechanical_Bosses",
	// 		Melee: {
	// 			class: "Melee\n",
	// 			weapons: [
	// 				{
	// 					itemName: "Avalanche",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
	// 				},
	// 				{
	// 					itemName: "Chain Guillotines",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
	// 				},
	// 			],
	// 			armor: [
	// 				{
	// 					itemName: "Cobalt armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
	// 				},
	// 				{
	// 					itemName: "Palladium armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Palladium_armor",
	// 				},
	// 			],
	// 			accesories: [
	// 				{
	// 					itemName: "Berserker's Glove",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
	// 				},
	// 				{
	// 					itemName: "Power Glove",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
	// 				},
	// 			],
	// 			extra: [
	// 				{
	// 					itemName: "Flask of Ichor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
	// 				},
	// 				{
	// 					itemName: "Ale",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
	// 				},
	// 			],
	// 		},
	// 		Ranged: {
	// 			class: "Melee\n",
	// 			weapons: [
	// 				{
	// 					itemName: "Avalanche",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
	// 				},
	// 				{
	// 					itemName: "Chain Guillotines",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
	// 				},
	// 			],
	// 			armor: [
	// 				{
	// 					itemName: "Cobalt armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
	// 				},
	// 				{
	// 					itemName: "Palladium armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Palladium_armor",
	// 				},
	// 			],
	// 			accesories: [
	// 				{
	// 					itemName: "Berserker's Glove",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
	// 				},
	// 				{
	// 					itemName: "Power Glove",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
	// 				},
	// 			],
	// 			extra: [
	// 				{
	// 					itemName: "Flask of Ichor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
	// 				},
	// 				{
	// 					itemName: "Ale",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
	// 				},
	// 			],
	// 		},
	// 		Magic: {
	// 			class: "Melee\n",
	// 			weapons: [
	// 				{
	// 					itemName: "Avalanche",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
	// 				},
	// 				{
	// 					itemName: "Chain Guillotines",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
	// 				},
	// 			],
	// 			armor: [
	// 				{
	// 					itemName: "Cobalt armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
	// 				},
	// 				{
	// 					itemName: "Palladium armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Palladium_armor",
	// 				},
	// 			],
	// 			accesories: [
	// 				{
	// 					itemName: "Berserker's Glove",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
	// 				},
	// 				{
	// 					itemName: "Power Glove",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
	// 				},
	// 			],
	// 			extra: [
	// 				{
	// 					itemName: "Flask of Ichor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
	// 				},
	// 				{
	// 					itemName: "Ale",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
	// 				},
	// 			],
	// 		},
	// 		Summoning: {
	// 			class: "Melee\n",
	// 			weapons: [
	// 				{
	// 					itemName: "Avalanche",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
	// 				},
	// 				{
	// 					itemName: "Chain Guillotines",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
	// 				},
	// 			],
	// 			armor: [
	// 				{
	// 					itemName: "Cobalt armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
	// 				},
	// 				{
	// 					itemName: "Palladium armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Palladium_armor",
	// 				},
	// 			],
	// 			accesories: [
	// 				{
	// 					itemName: "Berserker's Glove",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
	// 				},
	// 				{
	// 					itemName: "Power Glove",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
	// 				},
	// 			],
	// 			extra: [
	// 				{
	// 					itemName: "Flask of Ichor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
	// 				},
	// 				{
	// 					itemName: "Ale",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
	// 				},
	// 			],
	// 		},
	// 		Rogue: {
	// 			class: "Melee\n",
	// 			weapons: [
	// 				{
	// 					itemName: "Avalanche",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
	// 				},
	// 				{
	// 					itemName: "Chain Guillotines",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
	// 				},
	// 			],
	// 			armor: [
	// 				{
	// 					itemName: "Cobalt armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
	// 				},
	// 				{
	// 					itemName: "Palladium armor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Palladium_armor",
	// 				},
	// 			],
	// 			accesories: [
	// 				{
	// 					itemName: "Berserker's Glove",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
	// 				},
	// 				{
	// 					itemName: "Power Glove",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
	// 				},
	// 			],
	// 			extra: [
	// 				{
	// 					itemName: "Flask of Ichor",
	// 					itemURL:
	// 						"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
	// 				},
	// 				{
	// 					itemName: "Ale",
	// 					itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
	// 				},
	// 			],
	// 		},
	// 	},
	// ]);

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
