import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ClassSetupPage from "./pages/ClassSetupPage";

import { createChildRoutes } from "./utils/createChildRoutes";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/Melee",
		element: <ClassSetupPage classType="Melee" />,
		children: createChildRoutes("Melee"),
	},
	{
		path: "/Ranged",
		element: <ClassSetupPage classType="Ranger" />,
		children: createChildRoutes("Ranged"),
	},
	{
		path: "/Magic",
		element: <ClassSetupPage classType="Magic" />,
		children: createChildRoutes("Magic"),
	},
	{
		path: "/Summoning",
		element: <ClassSetupPage classType="Summoning" />,
		children: createChildRoutes("Summoning"),
	},
	{
		path: "/Rogue",
		element: <ClassSetupPage classType="Rogue" />,
		children: createChildRoutes("Rogue"),
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
