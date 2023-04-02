import { Basket } from "@phosphor-icons/react"

import { Container } from "./styles"

export function Splash(){
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