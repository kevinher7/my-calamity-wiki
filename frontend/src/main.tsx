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
		path: "/melee",
		element: <ClassSetupPage classType="Melee" />,
		children: createChildRoutes("melee", <h1>A</h1>),
	},
	{
		path: "/ranger",
		element: <ClassSetupPage classType="Ranger" />,
		children: createChildRoutes("ranger", <h1>A</h1>),
	},
	{
		path: "/magic",
		element: <ClassSetupPage classType="Magic" />,
		children: createChildRoutes("magic", <h1>A</h1>),
	},
	{
		path: "/summoning",
		element: <ClassSetupPage classType="Summoning" />,
		children: createChildRoutes("summoning", <h1>A</h1>),
	},
	{
		path: "/rogue",
		element: <ClassSetupPage classType="Rogue" />,
		children: createChildRoutes("rogue", <h1>A</h1>),
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
