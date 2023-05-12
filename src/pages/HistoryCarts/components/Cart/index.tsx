import { CaretRight, Clock, CurrencyDollar } from "@phosphor-icons/react";

import { ICart } from "../../../../interfaces";

import { Container } from "./styles";

interface CartProps {
  cart: ICart;
}

export function Cart({ cart}: CartProps) {
  return (
    <Container to={`/cart/${cart.id}`}>
      <div className="info">
        <strong>{cart.cartName}</strong>

        <div>
          <time>
            <Clock /> {cart.createdAt}
          </time>
          <span>
            <CurrencyDollar /> {cart.totalPrice}
          </span>
        </div>
      </div>

      <CaretRight />
    </Container>
  );
}
