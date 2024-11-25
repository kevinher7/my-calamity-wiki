import SetupsDisplay from "../components/SetupsDisplay";

export const createChildRoutes = (baseUrl: string) => {
	return [
		{
			path: `/${baseUrl}/Pre-Hardmode`,
			element: <SetupsDisplay />,
		},
		{
			path: `/${baseUrl}/Hardmode`,
			element: <SetupsDisplay />,
		},
		{
			path: `/${baseUrl}/Post-MoonLord`,
			element: <SetupsDisplay />,
		},
	];
};
