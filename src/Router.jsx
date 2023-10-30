import { createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/children/Home";
import Destination from "./pages/children/Destination";
import Crew from "./pages/children/Crew";
import Technology from "./pages/children/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "destination",
        element: <Destination />,
      },

      { path: "crew", element: <Crew /> },
      { path: "technology", element: <Technology /> },
    ],
  },
]);

export default router;
