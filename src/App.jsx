//react router dom
import {
	createBrowserRouter,
	RouterProvider
} from "react-router-dom";

import ThemeContextProvider from "./store/theme-content";

//components
import RootLayout from "./components/RootLayout";

//pages
import HomePage from "./pages/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "",
				element: <HomePage />
			}
		]
	}
])

function App() {
	return (
		<ThemeContextProvider>
			<RouterProvider router={router} />
		</ThemeContextProvider>
	)
}

export default App
