import { Routes, Route } from 'react-router-dom'

import { Cart } from './pages/Cart'
import { Home } from './pages/Carts'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

export const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart/:cartId" element={<Cart />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/sign" element={<SignUp />} />
    </Routes>
  )
}
