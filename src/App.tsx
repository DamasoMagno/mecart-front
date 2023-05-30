import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { RouterProvider } from "./routes";

import { globalStyles } from "./styles/global";

globalStyles();

export function App() {
  return (
    <BrowserRouter>
      <RouterProvider />
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
        position="top-center"
      />
    </BrowserRouter>
  );
}
