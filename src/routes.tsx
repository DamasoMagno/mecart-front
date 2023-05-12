import { Routes, Route } from "react-router-dom";

import { Splash } from "./pages/Splash";
import { SignIn } from "./pages/SignIn";
import { HistoryCarts } from "./pages/HistoryCarts";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/history" element={<HistoryCarts />} />
      <Route path="/cart/:cartId" element={<Cart />} />
      <Route path="/cart/:cartId/product" element={<Product />} />
    </Routes>
  );
};
