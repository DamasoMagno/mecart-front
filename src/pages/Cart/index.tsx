import { CurrencyDollar, Info } from "@phosphor-icons/react";
import { Swiper } from "swiper/react";

import { Product } from "./components/Product";
import { Navigation } from "./components/Navigation";
import { Header } from "../../components/Header";

import { Container, Resume } from "./styles";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Cart() {
  return (
    <>
      <Header title="Carrinho" route="/history" />

      <Container>
        <Swiper className="resume" slidesPerView={2} spaceBetween={10}>
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

      <Navigation />
    </>
  );
}
