export const createChildRoutes = (
	baseUrl: string,
	routeElement: JSX.Element
) => {
	return [
		{
			path: `/${baseUrl}/Pre-Hardmode`,
			element: routeElement,
		},
		{
			path: `/${baseUrl}/Hardmode`,
			element: routeElement,
		},
		{
			path: `/${baseUrl}/Post-MoonLord`,
			element: routeElement,
		},
	];
};
