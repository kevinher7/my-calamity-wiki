import SetupsDisplay from "../components/SetupsDisplay";

export const createChildRoutes = (
	baseUrl: "Melee" | "Ranged" | "Magic" | "Summoning" | "Rogue"
) => {
	return [
		{
			path: `/${baseUrl}/Pre-Hardmode`,
			element: <SetupsDisplay selectedClass={baseUrl} />,
		},
		{
			path: `/${baseUrl}/Hardmode`,
			element: <SetupsDisplay selectedClass={baseUrl} />,
		},
		{
			path: `/${baseUrl}/Post-MoonLord`,
			element: <SetupsDisplay selectedClass={baseUrl} />,
		},
	];
};
