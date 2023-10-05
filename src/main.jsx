import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router";
import { SpaceContextProvider } from "./context/SpaceContext.jsx";
import { RouterProvider } from "react-router-dom";

import "./styles/Globals.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpaceContextProvider>
      <RouterProvider router={router} />
    </SpaceContextProvider>
  </React.StrictMode>
);
