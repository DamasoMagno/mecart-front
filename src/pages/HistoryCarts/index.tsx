import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Basket, Plus, SignOut } from "@phosphor-icons/react";

import { Button } from "../../components/Button";
import { CreateCartModal } from "./components/CreateCartModal";
import { Cart } from "./components/Cart";

import { Content, Header } from "./styles";

export function HistoryCarts() {
  const navigate = useNavigate();
  const redirect = () => navigate("/login");

  const [cartOpen, setCartOpen] = useState(false);
  const toggleCartOpen = () => setCartOpen(!cartOpen);

  return (
    <div>
      <Header>
        <div className="logo">
          <Basket weight="bold" />
          <strong>
            Me<span>Cart</span>
          </strong>
        </div>

        <button onClick={redirect}>
          <SignOut />
        </button>
      </Header>

      <Content>
        <nav>
          <button>Menor preço</button>
          <button>Mais recente</button>
        </nav>

        <div className="carts">
          <strong className="cartQuantity">
            Carrinhos <span>2</span>
          </strong>

          <ul>
            <Cart
              title="Cebolitos e doritos"
              createdAt="20/01/2022"
              totalPrice="32,00"
            />
            <Cart
              title="Cebolitos e doritos"
              createdAt="20/01/2022"
              totalPrice="32,00"
            />
          </ul>
        </div>

        <footer>
          <Button onClick={toggleCartOpen}>
            <Plus /> <span>Novo Carrinho</span>
          </Button>
        </footer>
      </Content>

      <CreateCartModal cartModalIsOpen={cartOpen} onOpenModal={toggleCartOpen} />
    </div>
  );
}
