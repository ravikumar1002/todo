import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserDataProvider } from "./context/userDataContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserDataProvider>
      <App />
    </UserDataProvider>
  </React.StrictMode>
);
