import SetupsDisplay from "../components/SetupsDisplay";

export const createChildRoutes = (
	baseUrl: "Melee" | "Ranged" | "Magic" | "Summoning" | "Rogue"
) => {
	return [
		{
			path: `/${baseUrl}/Pre-Hardmode`,
			element: (
				<SetupsDisplay
					selectedClass={baseUrl}
					currentGameProgression="preHardmode"
				/>
			),
		},
		{
			path: `/${baseUrl}/Hardmode`,
			element: (
				<SetupsDisplay
					selectedClass={baseUrl}
					currentGameProgression="hardmode"
				/>
			),
		},
		{
			path: `/${baseUrl}/Post-MoonLord`,
			element: (
				<SetupsDisplay
					selectedClass={baseUrl}
					currentGameProgression="postMoonLord"
				/>
			),
		},
	];
};
