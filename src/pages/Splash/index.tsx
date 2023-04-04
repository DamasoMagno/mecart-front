import { Basket } from "@phosphor-icons/react"

import { Container } from "./styles"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export function Splash(){
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => navigate("/login"), 2500)
  }, [])

  return (
    <Container>
      <div className="logo">
        <Basket 
          size={60} 
          color="rgba(0, 135, 95, 0.85)"
          weight="bold"
        />

        <strong>
          Me<span>Cart</span>
        </strong>
      </div>
    </Container>
  )
}