import { Link } from "react-router-dom";
import { Basket, CurrencyDollar, Pencil, Trash } from "@phosphor-icons/react";

import { Container } from "./styles";

export const Product = () => (
  <Container>
    <strong>Arroz Branco</strong>

    <div>
      <div className="productData">
        <span>
          <Basket /> 03
        </span>
        <span>
          <CurrencyDollar /> 20,00
        </span>
      </div>

      <div className="productEdit">
        <Link to={"/product"}>
          <Pencil />
        </Link>
        <button>
          <Trash />
        </button>
      </div>
    </div>
  </Container>
);
