import { Routes, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Carts'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Products } from './pages/Products'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart/:cartId" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
    </Routes>
  )
}
