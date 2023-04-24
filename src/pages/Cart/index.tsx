import { CaretLeft, CurrencyDollar, Info, X } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { Product } from "./components/Product";
import { Navigation } from "./components/Navigation";

import { Header, Container } from "./styles";

export function Cart() {
  return (
    <>
      <Header>
        <Link to="/history">
          <CaretLeft />
        </Link>
        <h3>Novo Carrinho</h3>
        <div />
      </Header>

      <Container>
        <section className="resume">
          <div className="resumeTopic">
            <header>
              <span>Status</span>
              <Info />
            </header>
            <strong>Sacola livre</strong>
          </div>

          <div className="resumeTopic">
            <header>
              <span>Total na sacola</span>
              <CurrencyDollar />
            </header>
            <strong>R$ 80,00</strong>
          </div>

          <div className="resumeTopic">
            <header>
              <span>Limite da sacola</span>
              <CurrencyDollar />
            </header>

            <strong>R$ 80,00</strong>
          </div>
        </section>

        <section className="products">
          <strong className="quantityResume">
            Produtos <span>4</span>
          </strong>

          <ul>
            <Product />
          </ul>
        </section>
      </Container>

      <Navigation />
    </>
  );
}
