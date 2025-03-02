//react router dom
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//components
import RootLayout from "./components/RootLayout";

//pages
import HomeSection from "./sections/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomeSection />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
