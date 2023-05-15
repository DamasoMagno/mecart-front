import { BrowserRouter } from "react-router-dom";

import { RouterProvider } from "./routes";

import { globalStyles } from "./styles/global";
import { Toaster } from "react-hot-toast";

globalStyles();

export function App() {
  return (
    <BrowserRouter>
      <RouterProvider />
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}
