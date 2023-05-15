import { format } from "date-fns";
import { CaretRight, Clock, CurrencyDollar } from "@phosphor-icons/react";

import { ICart } from "../../../../interfaces";

import { Container } from "./styles";
import { formatPrice } from "../../../../utils/format-price";

interface CartProps {
  cart: ICart;
}

export function Cart({ cart }: CartProps) {
  const cartDate = new Date(cart.createdAt);
  const dateFormatted = format(cartDate, "dd/MM/yyyy");

  return (
    <Container to={`/cart/${cart.id}`}>
      <div className="info">
        <strong>{cart.cartName}</strong>

        <div>
          <time>
            <Clock /> {dateFormatted}
          </time>
          <span>
            <CurrencyDollar /> {formatPrice(Number(cart.totalPrice))}
          </span>
        </div>
      </div>

      <CaretRight />
    </Container>
  );
}
