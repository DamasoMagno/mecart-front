import { Routes, Route } from "react-router-dom"

import { Sign } from "./pages/Sign"

export function RouterProvider(){
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
    </Routes>
  )
}