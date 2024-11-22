import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ClassSetupPage from "./pages/ClassSetupPage";

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
	},
	{
		path: "/ranger",
		element: <ClassSetupPage classType="Ranger" />,
	},
	{
		path: "/magic",
		element: <ClassSetupPage classType="Magic" />,
	},
	{
		path: "/summoner",
		element: <ClassSetupPage classType="Summoner" />,
	},
	{
		path: "/rogue",
		element: <ClassSetupPage classType="Rogue" />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
