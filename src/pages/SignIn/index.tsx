import { Basket, GoogleLogo } from "@phosphor-icons/react";

import { Button } from "../../components/Button";

import { Container, Content } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Content>
        <Basket
          className="logoIcon"
          size={80}
          color="rgba(0, 135, 95, 0.85)"
          weight="bold"
        />

        <div className="description">
          <strong>
            Me<span>Cart</span>
          </strong>
          <p>
            Monte seu carrinho
            de compras com consciência
          </p>

          <Button>
            <GoogleLogo size={20} /> Fazer Login
          </Button>
        </div>
      </Content>
    </Container>
  )
}