import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Check, Plus, X } from "@phosphor-icons/react";

import { ICart, IProduct } from "../../interfaces";

import { Product } from "./components/Product";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, Navigation } from "./styles";

import "swiper/css";
import { Resumes } from "./components/Resumes";

export function Cart() {
  const navigate = useNavigate();
  const params = useParams();

  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState(() => {
    const carts: ICart[] = JSON.parse(localStorage.getItem("@carts") as string);
    const findCartById = carts.find(
      (cart) => cart.id === Number(params.cartId)
    );

    if (!findCartById) {
      return null;
    }

    return findCartById;
  });

  let totalPriceInCart = products.reduce(
    (accumulator: number, currentValue: IProduct) => {
      let productPriceOnCart = currentValue.quantity * currentValue.unity;
      let totalCartPrice = productPriceOnCart + accumulator;

      return totalCartPrice;
    },
    0
  );

  const redirect = () => navigate(`/cart/${params.cartId}/product`);

  useEffect(() => {
    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    let filterProductsByCartId = productsStoragedByCartId.filter(
      (product) => product.cartId === params.cartId
    );

    setProducts(filterProductsByCartId);
  }, []);

  function removeCartFromStorage(id: number) {
    let carts: ICart[] = JSON.parse(localStorage.getItem("@carts") as string);
    let products: IProduct[] = JSON.parse(localStorage.getItem("@products") as string)

    const findCartById = carts.find(
      (cart) => cart.id === Number(params.cartId)
    );

    if (!findCartById) return;

    carts = carts.filter(cart => cart.id !== findCartById.id);
    products = products.filter(product => Number(product.cartId) !== findCartById.id);

    localStorage.setItem("@carts", JSON.stringify(carts));
    localStorage.setItem("@products", JSON.stringify(products));

    navigate("/history");
  }


  return (
    <>
      <Header title="Carrinho" route="/history" />

      <Container>
        <Resumes
          limitCreditOnCart={Number(cart?.totalPrice)}
          totalPriceOnCart={totalPriceInCart}
        />

        <section className="products">
          <strong className="quantityProducts">
            Produtos
            <span>{products?.length ?? 0}</span>
          </strong>

          <ul>
            {products?.map((product) => {
              return (
                <Product
                  key={product.id}
                  setProducts={setProducts}
                  product={product}
                />
              );
            })}
          </ul>
        </section>
      </Container>

      <Navigation>
        <button className="finish">
          <Check /> Finalizar
        </button>
        <Button className="newCart" onClick={redirect}>
          <Plus />
        </Button>
        <button
          className="remove"
          onClick={() => removeCartFromStorage(Number(cart?.id))}
        >
          <X /> Remover
        </button>
      </Navigation>
    </>
  );
}
