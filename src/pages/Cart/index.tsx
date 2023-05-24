import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Check, PencilLine, Plus, X } from "@phosphor-icons/react";

import { IProduct } from "../../interfaces";

import { Product } from "./components/Product";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Resumes } from "./components/Resumes";
import { EditCartModal } from "../../components/EditCartModal";

import { useModalStorage } from "../../store/modalStorage";
import { useCartsStorage } from "../../store/cartsStorage";

import { Container, Navigation } from "./styles";

import "swiper/css";

export function Cart() {
  const navigate = useNavigate();
  const params = useParams();

  const { openCartModal } = useModalStorage((state) => ({
    openCartModal: state.openCartModal,
  }));
  const { cart, setCart, removeCart } = useCartsStorage((state) => ({
    cart: state.cart,
    setCart: state.setCart,
    removeCart: state.removeCart,
  }));
  const [products, setProducts] = useState<IProduct[]>([]);

  let totalPriceInCart = products.reduce(
    (accumulator: number, currentValue: IProduct) => {
      let productPriceOnCart =
        currentValue.quantity * currentValue.pricePerUnity;
      let totalCartPrice = productPriceOnCart + accumulator;

      return totalCartPrice;
    },
    0
  );

  useEffect(() => {
    setCart(String(params.cartId));

    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    let filterProductsByCartId = productsStoragedByCartId.filter(
      (product) => product.cartId === params.cartId
    );

    setProducts(filterProductsByCartId);
  }, []);

  const redirect = () => navigate(`/cart/${params.cartId}/product`);

  function removeCartFromStorage() {
    removeCart(String(params.cartId));
    navigate("/history");
  }

  let cartLimited = totalPriceInCart >= Number(cart?.totalPrice);

  return (
    <>
      <Header title="Carrinho" route="/history">
        <Button
          style={{ width: "40px", height: "40px" }}
          variant={{ outline: true }}
          onClick={() => openCartModal(true, cart)}
        >
          <PencilLine />
        </Button>
      </Header>

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
        <Button className="newCart" onClick={redirect} disabled={cartLimited}>
          <Plus />
        </Button>
        <button className="remove" onClick={removeCartFromStorage}>
          <X /> Remover
        </button>
      </Navigation>

      <EditCartModal />
    </>
  );
}
