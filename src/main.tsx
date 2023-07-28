import React from "react";
import ReactDOM from "react-dom/client";
import AppController from "./controller";
import "./index.css";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GeistProvider>
    <React.StrictMode>
      <AppController />
    </React.StrictMode>
  </GeistProvider>,
);
