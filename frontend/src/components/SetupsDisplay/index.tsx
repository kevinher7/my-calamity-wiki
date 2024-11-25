import SetupComponent from "../SetupComponent";

// import { classSetup } from "../../interfaces/classSetups";

import "./styles.css";

// interface SetupsDisplayProps {
// 	classSetups: classSetup[];
// }

const SetupsDisplay = () => {
	return (
		<main className="setups-display">
			<SetupComponent />
			<SetupComponent />
			<SetupComponent />
			<SetupComponent />
			<SetupComponent />
			<SetupComponent />
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
