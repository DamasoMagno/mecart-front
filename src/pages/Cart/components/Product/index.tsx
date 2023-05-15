import { Link, useParams } from "react-router-dom";
import { Basket, CurrencyDollar, Pencil } from "@phosphor-icons/react";
import { ConfirmCartRemove } from "../CofirmCartRemove";

import { Container } from "./styles";
import { ICart, IProduct } from "../../../../interfaces";

interface ProductProps {
  product: IProduct;
  setProducts: (products: IProduct[]) => void;
}

export const Product = ({ product, setProducts }: ProductProps) => {
  const params = useParams() as { cartId: string; productId: string };

  function handleRemoveProductCart() {
    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    const findProductPosition = productsStoragedByCartId.findIndex(
      (product) => product.id === Number(params.productId)
    );

    productsStoragedByCartId.splice(findProductPosition, 1);

    setProducts(productsStoragedByCartId);
    localStorage.setItem("@products", JSON.stringify(productsStoragedByCartId));
  }

  let totalPriceProduct = product.quantity * product.unity;

  let productPriceFormatted = new Intl.NumberFormat("pt-Br", {
    style: "currency",
    currency: "BRL",
  }).format(totalPriceProduct);

  return (
    <Container>
      <strong>{product.productName}</strong>

      <div>
        <div className="productData">
          <span>
            <Basket /> {product.quantity}
          </span>
          <span>
            <CurrencyDollar /> {productPriceFormatted}
          </span>
        </div>

        <div className="productEdit">
          <Link to={`/cart/${params.cartId}/product?productId=${product.id}`}>
            <Pencil />
          </Link>

          <ConfirmCartRemove
            onRemoveProductFromCart={handleRemoveProductCart}
          />
        </div>
      </div>
    </Container>
  );
};
