import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="bg-gradient-to-b from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <App />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
