import { Routes, Route } from "react-router-dom";

import { Splash } from "./pages/Splash";
import { SignIn } from "./pages/SignIn";
import { Carts } from "./pages/Home/Carts";
import { Products } from "./pages/Home/Products";
import { Cart } from "./pages/Cart";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Home />}>
        <Route path="history" element={<Carts />} />
        <Route path="products" element={<Products />} />
      </Route>
      <Route path="/products" element={<Products />} />
      <Route path="/cart/:cartId" element={<Cart />} />
      <Route path="/cart/:cartId/product" element={<Product />} />
    </Routes>
  );
};
