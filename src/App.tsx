import { BrowserRouter } from "react-router-dom";

import { RouterProvider } from "./routes";

import { globalStyles } from "./styles/global";

globalStyles();

export function App() {
  return (
    <BrowserRouter>
      <RouterProvider />
    </BrowserRouter>
  );
}
