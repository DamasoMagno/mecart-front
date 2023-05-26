import { Link, useParams } from "react-router-dom";
import { Basket, CurrencyDollar, Pencil, Trash } from "@phosphor-icons/react";

import { IProduct } from "../../../../interfaces";
import { ConfirmCartRemove } from "../../../../components/ConfirmActionModal";

import { Container } from "./styles";
import { useCartsStorage } from "../../../../store/cartsStorage";
import { Button } from "../../../../components/Button";

interface ProductProps {
  product: IProduct;
  setProducts: (products: IProduct[]) => void;
}

export const Product = ({ product, setProducts }: ProductProps) => {
  const params = useParams();
  const cart = useCartsStorage((state) => state.cart);

  function handleRemoveProductCart() {
    const productsStoragedByCartId: IProduct[] =
    JSON.parse(localStorage.getItem("@products") as string) || [];
    
    const removeProductByID = productsStoragedByCartId.filter(
      (currentProduct) => currentProduct.id !== product.id
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
          {cart?.status === "pendent" && (
            <>
              <Link
                to={`/cart/${params.cartId}/product?productId=${product.id}`}
              >
                <Pencil />
              </Link>

              <ConfirmCartRemove 
                onRemove={handleRemoveProductCart}
                description="Confirmar a remoção, não terá como reverter"
              >
                <button>
                  <Trash />
                </button>
              </ConfirmCartRemove>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};
