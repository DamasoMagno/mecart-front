import { useNavigate } from "react-router-dom";
import { Check, CurrencyDollar, Info, Plus, X } from "@phosphor-icons/react";
import { Swiper } from "swiper/react";

import { Product } from "./components/Product";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, Resume, Navigation } from "./styles";

import "swiper/css";

export function Cart() {
  const navigate = useNavigate();
  const redirect = () => navigate("/product");

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
            <span>4</span>
          </strong>

          <ul>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </ul>
        </section>
      </Container>

      <Navigation>
        <button className="finish">
          <Check /> Finalizar
        </button>
        <Button
          variant={{ float: true }}
          className="newCart"
          onClick={redirect}
        >
          <Plus />
        </Button>
        <button className="remove">
          <X /> Remover
        </button>
      </Navigation>
    </>
  );
}
