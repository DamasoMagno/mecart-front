import { useNavigate } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";

import { Container, Content } from "./styles";

export function HistoryCarts() {
  const navigate = useNavigate();
  const redirect = () => navigate("/createCart");

  return (
    <Container>
      <Header />

      <Content>
        <nav>
          <button>Menor preço</button>
          <button>Mais recente</button>
          <button>Mais recente</button>
          <button>Mais recente</button>
          <button>Mais recente</button>
          <button>Mais recente</button>
        </nav>

        <ul>
          <div className="resume">
            <strong>Carrinhos</strong>
            <span>2</span>
          </div>

          <Cart
            route="/"
            title="Cebolitos e doritos"
            time="20/01/2022 ás 13h"
          />
        </ul>

        <footer>
          <Button onClick={redirect}>Novo Carrinho</Button>
        </footer>
      </Content>
    </Container>
  );
}
