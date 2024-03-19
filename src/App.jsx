//react router dom
import { 
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

//components
import RootLayout from "./components/RootLayout";

//pages
import HomePage from "./sections/Home";
import SkillAndExperiencePage from "./sections/SkillAndExp";
import ProjectPage from "./sections/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/experiences&skills",
        element: <SkillAndExperiencePage />
      },
      {
        path: "/projects",
        element: <ProjectPage />
      }
    ]
  }
])


function App() {
  return <RouterProvider router={router} />
}

export default App
