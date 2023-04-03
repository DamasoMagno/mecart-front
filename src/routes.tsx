import { Routes, Route } from "react-router-dom"

import { Splash } from "./pages/Splash"
import { SignIn } from "./pages/SignIn"

export function RouterProvider(){
  return (
    <Routes>
      <Route path="/" element={<Splash />}/>
      <Route path="/login" element={<SignIn />}/>
    </Routes>
  )
}