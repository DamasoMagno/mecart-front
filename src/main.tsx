import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { registerSW } from "virtual:pwa-register";

const updateSM = registerSW({
  onNeedRefresh() {
    let confirmUpdate = confirm("New content available. Reload?");

    if (confirmUpdate) {
      updateSM(true);
    }
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
