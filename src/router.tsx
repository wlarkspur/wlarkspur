import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import React from "react";
import TrolleyStatus from "./components/TrolleyStatus";
import ErrorPage from "./components/ErrorPage";
import Model from "./components/Model";
import Parts from "./components/Parts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "trolley",
        element: <TrolleyStatus />,
      },
      {
        path: "model",
        element: <Model />,
      },
      {
        path: "parts",
        element: <Parts />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
