import { Routes, Route } from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { Home } from "./pages/Carts";

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart/:cartId" element={<Cart />} />
      <Route path="/cart/:cartId/product" element={<Product />} />
    </Routes>
  );
};
