import { Link, useParams } from "react-router-dom";
import { Basket, CurrencyDollar, Pencil } from "@phosphor-icons/react";

import { IProduct } from "../../../../interfaces";
import { ConfirmCartRemove } from "../CofirmCartRemove";

import { Container } from "./styles";

interface ProductProps {
  product: IProduct;
  setProducts: (products: IProduct[]) => void;
}


export const Product = ({ product, setProducts }: ProductProps) => {
  const params = useParams();

  function handleRemoveProductCart() {
    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    const removeProductByID = productsStoragedByCartId.filter(
      (product) => product.id !== params.productId
    );

    localStorage.setItem("@products", JSON.stringify(removeProductByID));
    setProducts(removeProductByID);
  }

  let totalPriceProduct = product.quantity * product.pricePerUnity;

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
