import { useNavigate } from "react-router-dom";
import { Basket, GoogleLogo, User } from "@phosphor-icons/react";

import { Button } from "../../components/Button";

import { Container, Content } from "./styles";

export function SignIn() {
  const navigate = useNavigate();
  const redirect = () => navigate("/history");

  return (
    <Container>
      <Content>
        <Basket className="logo" weight="bold" color="#00875F" />

        <div className="description">
          <strong>
            Me<span>Cart</span>
          </strong>
          <p>Monte seu carrinho de compras com consciência.</p>
        </div>

        <div className="signInMethods">
          <Button variant={{ outline: true }} onClick={redirect}>
            <User size={20} /> Entrar sem e-mail
          </Button>
          <Button>
            <GoogleLogo size={20} /> Entrar em google
          </Button>
        </div>
      </Content>
    </Container>
  );
}
