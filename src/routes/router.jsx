import { createBrowserRouter, Route, Link } from "react-router-dom";
import Layout from "../layout/Layout";
import Clients, { loader as clientLoader } from "../pages/Clients";
import NewClient, { action as clientNewAction } from "../pages/NewClient";
import EditClientPage, {
	loader as editClientLoader,
	action as editClientAction,
} from "../pages/EditClientPage";
import ErrorPage from "../pages/ErrorPage";
import { action as deleteClientAction } from "../components/clientcomponent/Client";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Clients />,
				loader: clientLoader,
				errorElement: <ErrorPage />,
			},
			{
				path: "client/new-client",
				element: <NewClient />,
				action: clientNewAction,
				errorElement: <ErrorPage />,
			},
			{
				path: "client/:clientId/edit",
				element: <EditClientPage />,
				loader: editClientLoader,
				action: editClientAction,
				errorElement: <ErrorPage />,
			},
			{
				path: "client/:clientId/delete",
				action: deleteClientAction,
			},
		],
	},
]);
