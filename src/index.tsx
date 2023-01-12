import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import router from "./router";

const GlobalStyle = createGlobalStyle`
body{
  background-color: white
}
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />

    <RouterProvider router={router} />
  </React.StrictMode>
);
