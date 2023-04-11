import { Routes, Route } from "react-router-dom"

import { Splash } from "./pages/Splash"
import { SignIn } from "./pages/SignIn"
import { CreateCart } from "./pages/CreateCart"
import { HistoryCarts } from "./pages/HistoryCarts"

export function RouterProvider() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/createCart" element={<CreateCart />} />
      <Route path="/history" element={<HistoryCarts />} />
    </Routes>
  )
}