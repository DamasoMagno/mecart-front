import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Check, CurrencyDollar, Info, Plus, X } from "@phosphor-icons/react";
import { Swiper } from "swiper/react";

import { IProduct } from "../../interfaces";

import { Product } from "./components/Product";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, Resume, Navigation } from "./styles";

import "swiper/css";

export function Cart() {
  const navigate = useNavigate();
  const params = useParams() as { cartId: string };

  const [products, setProducts] = useState<IProduct[] | undefined>([]);

  const redirect = () => navigate(`/cart/${params.cartId}/product`);

  useEffect(() => {
    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    let filterProductsByCartId = productsStoragedByCartId.filter((product) => {
      return String(product.cartId) === params.cartId;
    });

    setProducts(filterProductsByCartId);
  }, []);

  return (
    <>
      <Header title="Carrinho" route="/history" />

      <Container>
        <Swiper
          className="resume"
          spaceBetween={12}
          breakpoints={{
            728: {
              slidesPerView: 3,
            },
            350: {
              slidesPerView: 2.1,
            },
            200: {
              slidesPerView: 1,
            },
          }}
        >
          <Resume completed>
            <header>
              <span>Status</span>
              <Info />
            </header>
            <strong>Sacola livre</strong>
          </Resume>

          <Resume completed>
            <header>
              <span>Total na sacola</span>
              <CurrencyDollar />
            </header>
            <strong>R$ 80,00</strong>
          </Resume>

          <Resume>
            <header>
              <span>Limite da sacola</span>
              <CurrencyDollar />
            </header>

            <strong>R$ 80,00</strong>
          </Resume>
        </Swiper>

        <section className="products">
          <strong className="quantityProducts">
            Produtos
            <span>{products?.length ?? 0}</span>
          </strong>

          <ul>
            {products?.map((product) => {
              return <Product key={product.id} product={product} />;
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
        <button className="remove">
          <X /> Remover
        </button>
      </Navigation>
    </>
  );
}
