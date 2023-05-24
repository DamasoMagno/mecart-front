import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Basket } from "@phosphor-icons/react";

import { Container } from "./styles";

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/login"), 2500);
  }, []);

  return (
    <Container>
      <div className="logo">
        <Basket size={60} weight="bold" color="#00875F" />
        <strong>
          Me<span>Cart</span>
        </strong>
      </div>
    </Container>
  );
};
