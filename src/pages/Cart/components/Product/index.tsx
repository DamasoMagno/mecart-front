import { Link, useParams } from "react-router-dom";
import { Basket, CurrencyDollar, Pencil, Trash } from "@phosphor-icons/react";
import { ConfirmCartRemove } from "../CofirmCartRemove";

import { Container } from "./styles";
import { IProduct } from "../../../../interfaces";

interface ProductProps {
  product: IProduct;
}


export const Product = ({ product }: ProductProps) => {
  const params = useParams() as { cartId: string; productId: string };

  return (
    <Container>
      <strong>{product.productName}</strong>

      <div>
        <div className="productData">
          <span>
            <Basket /> {product.quantity}
          </span>
          <span>
            <CurrencyDollar /> {product.quantity * product.unity}
          </span>
        </div>

        <div className="productEdit">
          <Link to={`/cart/${params.cartId}/product?productId=${product.id}`}>
            <Pencil />
          </Link>

          <ConfirmCartRemove />
        </div>
      </div>
    </Container>
  );
};
