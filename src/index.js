import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Dashboard } from "./pages/Dashboard";
import { SearchScores } from "./pages/SearchScores";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";
import DefaultLayout from "./layouts/Default/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "search",
        element: <SearchScores />,
      },
      {
        path: "report",
        element: <Reports />,
      },
      {
        path: "setting",
        element: <Settings />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
