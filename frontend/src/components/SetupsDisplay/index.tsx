import { useState } from "react";
import SetupComponent from "../SetupComponent";

// import { classSetup } from "../../interfaces/classSetups";

import "./styles.css";
import { simpleClassSetup } from "../../interfaces/classSetups";

interface SetupsDisplayProps {
	selectedClass: "Melee" | "Ranged" | "Magic" | "Summoning" | "Rogue";
}

interface classSetupData {
	gameState: string;
	Melee: simpleClassSetup;
	Ranged: simpleClassSetup;
	Magic: simpleClassSetup;
	Summoning: simpleClassSetup;
	Rogue: simpleClassSetup;
}

const SetupsDisplay = (props: SetupsDisplayProps) => {
	const [fetchedSetupsData, _setFetchedSetupsData] = useState<
		classSetupData[]
	>([
		{
			gameState: "Pre-Mechanical_Bosses",
			Melee: {
				class: "Melee\n",
				weapons: [
					{
						itemName: "Avalanche",
						itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
					},
					{
						itemName: "Chain Guillotines",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
					},
				],
				armor: [
					{
						itemName: "Cobalt armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
					},
					{
						itemName: "Palladium armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Palladium_armor",
					},
				],
				accesories: [
					{
						itemName: "Berserker's Glove",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
					},
					{
						itemName: "Power Glove",
						itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
					},
				],
				extra: [
					{
						itemName: "Flask of Ichor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
					},
					{
						itemName: "Ale",
						itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
					},
				],
			},
			Ranged: {
				class: "Melee\n",
				weapons: [
					{
						itemName: "Avalanche",
						itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
					},
					{
						itemName: "Chain Guillotines",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
					},
				],
				armor: [
					{
						itemName: "Cobalt armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
					},
					{
						itemName: "Palladium armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Palladium_armor",
					},
				],
				accesories: [
					{
						itemName: "Berserker's Glove",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
					},
					{
						itemName: "Power Glove",
						itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
					},
				],
				extra: [
					{
						itemName: "Flask of Ichor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
					},
					{
						itemName: "Ale",
						itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
					},
				],
			},
			Magic: {
				class: "Melee\n",
				weapons: [
					{
						itemName: "Avalanche",
						itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
					},
					{
						itemName: "Chain Guillotines",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
					},
				],
				armor: [
					{
						itemName: "Cobalt armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
					},
					{
						itemName: "Palladium armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Palladium_armor",
					},
				],
				accesories: [
					{
						itemName: "Berserker's Glove",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
					},
					{
						itemName: "Power Glove",
						itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
					},
				],
				extra: [
					{
						itemName: "Flask of Ichor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
					},
					{
						itemName: "Ale",
						itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
					},
				],
			},
			Summoning: {
				class: "Melee\n",
				weapons: [
					{
						itemName: "Avalanche",
						itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
					},
					{
						itemName: "Chain Guillotines",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
					},
				],
				armor: [
					{
						itemName: "Cobalt armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
					},
					{
						itemName: "Palladium armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Palladium_armor",
					},
				],
				accesories: [
					{
						itemName: "Berserker's Glove",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
					},
					{
						itemName: "Power Glove",
						itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
					},
				],
				extra: [
					{
						itemName: "Flask of Ichor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
					},
					{
						itemName: "Ale",
						itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
					},
				],
			},
			Rogue: {
				class: "Melee\n",
				weapons: [
					{
						itemName: "Avalanche",
						itemURL: "https://calamitymod.wiki.gg/wiki/Avalanche",
					},
					{
						itemName: "Chain Guillotines",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Chain_Guillotines",
					},
				],
				armor: [
					{
						itemName: "Cobalt armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Cobalt_armor",
					},
					{
						itemName: "Palladium armor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Palladium_armor",
					},
				],
				accesories: [
					{
						itemName: "Berserker's Glove",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Berserker%27s_Glove",
					},
					{
						itemName: "Power Glove",
						itemURL: "https://calamitymod.wiki.gg/wiki/Power_Glove",
					},
				],
				extra: [
					{
						itemName: "Flask of Ichor",
						itemURL:
							"https://calamitymod.wiki.gg/wiki/Flask_of_Ichor",
					},
					{
						itemName: "Ale",
						itemURL: "https://calamitymod.wiki.gg/wiki/Ale",
					},
				],
			},
		},
	]);

	// const fetchedSetupsData: classSetupData[] = [
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
	// 	},
	// ];

	return (
		<main className="setups-display">
			{fetchedSetupsData.map((setupData) => {
				return (
					<SetupComponent
						key={setupData["gameState"]}
						gameState={setupData["gameState"]}
						classSetup={setupData[props.selectedClass]}
					/>
				);
			})}
		</main>
	);
};

export default SetupsDisplay;

// {
//     "gameState": "Pre-Mechanical_Bosses",
//     "classSetups": [
//       {
//         "class": "Melee\n",
//         "weapons": [
//           {
//             "itemName": "Avalanche",
//             "itemURL": "https://calamitymod.wiki.gg/wiki/Avalanche"
//           },
//           {
//             "itemName": "Chain Guillotines",
//             "itemURL": "https://calamitymod.wiki.gg/wiki/Chain_Guillotines"
//           },
//           {
//             "itemName": "Dao of Pow",
//             "itemURL": "https://calamitymod.wiki.gg/wiki/Dao_of_Pow"
//           },
//           {
//             "itemName": "Shadowflame Knife",
//             "itemURL": "https://calamitymod.wiki.gg/wiki/Shadowflame_Knife"
//           },
//           {
//             "itemName": "Storm Saber",
//             "itemURL": "https://calamitymod.wiki.gg/wiki/Storm_Saber"
//           },
//           {
//             "itemName": "Yin-Yo",
//             "itemURL": "https://calamitymod.wiki.gg/wiki/Yin-Yo"
//           }
//         ],
