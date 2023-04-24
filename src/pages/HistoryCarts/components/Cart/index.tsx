import { CaretRight, Clock, CurrencyDollar } from "@phosphor-icons/react";
import { Container } from "./styles";

interface CartProps {
  route: string;
  title: string;
  createdAt: string;
  totalPrice: string;
}

export function Cart({ route, createdAt, title, totalPrice }: CartProps) {
  return (
    <Container to={route}>
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
