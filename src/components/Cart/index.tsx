import { CaretRight, Clock } from "@phosphor-icons/react";
import { Container } from "./styles";

interface CartProps {
  route: string;
  title: string;
  time: string;
}

export function Cart({ route, time, title }: CartProps) {
  return (
    <Container to={route}>
      <div className="info">
        <strong>{title}</strong>
        <time>
          <Clock /> {time}
        </time>
      </div>

      <CaretRight />
    </Container>
  );
}
