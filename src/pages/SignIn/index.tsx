import { Basket, GoogleLogo, User } from "@phosphor-icons/react";

import { Button } from "../../components/Button";

import { Container, Content } from "./styles";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();

  const redirect = () => navigate("/history");

  return (
    <Container>
      <Content>
        <Basket className="logo" weight="bold" />

        <div className="description">
          <strong>
            Me<span>Cart</span>
          </strong>
          <p>Monte seu carrinho de compras com consciência.</p>

          <div className="loginOptions">
            <Button outline onClick={redirect}>
              <User size={20} /> Entrar sem conta
            </Button>
            <Button>
              <GoogleLogo size={20} /> Entrar em google
            </Button>
          </div>
        </div>
      </Content>
    </Container>
  );
}
