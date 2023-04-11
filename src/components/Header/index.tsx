import { Basket, SignOut } from "@phosphor-icons/react";

import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const redirect = () => navigate("/login");

  return (
    <Container>
      <div className="logo">
        <Basket weight="bold" />
        <strong>
          Me<span>Cart</span>
        </strong>
      </div>

      <button onClick={redirect}>
        <SignOut />
      </button>
    </Container>
  );
}
