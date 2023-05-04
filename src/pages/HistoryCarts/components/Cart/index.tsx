import { CaretRight, Clock, CurrencyDollar } from "@phosphor-icons/react";

import { Container } from "./styles";

interface CartProps {
  title: string;
  createdAt: string;
  totalPrice: string;
}

export function Cart({ createdAt, title, totalPrice }: CartProps) {
  return (
    <Container to="/cart">
      <div className="info">
        <strong>{title}</strong>

        <div>
          <time>
            <Clock /> {createdAt}
          </time>

          <span>
            <CurrencyDollar /> 12,00
          </span>
        </div>
      </div>

      <CaretRight />
    </Container>
  );
}
