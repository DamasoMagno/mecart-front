import { Routes, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Carts'
import { Products } from './pages/Products'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart/:cartId" element={<Cart />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
}
