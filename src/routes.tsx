import { Routes, Route } from "react-router-dom"

import { Splash } from "./pages/Splash"

export function RouterProvider(){
  return (
    <Routes>
      <Route path="/splash" element={<Splash />}/>
    </Routes>
  )
}