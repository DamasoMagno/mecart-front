import { Basket } from "@phosphor-icons/react";

import { Container } from "./styles";

export const Splash = () => (
  <Container>
    <div className="logo">
      <Basket size={60} weight="bold" color="#00875F" />
      <strong>
        Me<span>Cart</span>
      </strong>
    </div>
  </Container>
);
