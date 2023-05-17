import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Basket, Plus, SignOut } from "@phosphor-icons/react";

import { ICart } from "../../interfaces";

import { Button } from "../../components/Button";
import { CreateCartModal } from "./components/CreateCartModal";
import { Cart } from "./components/Cart";

import { Content, Header } from "./styles";

export function HistoryCarts() {
  const navigate = useNavigate();

  const [cartOpen, setCartOpen] = useState(false);
  const [carts, setCarts] = useState<ICart[]>(() => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    return cartsStoraged;
  });

  const handleToggleCartOpen = () => setCartOpen(!cartOpen);

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  function handleInsertNewCartOnCarts(cart: ICart) {
    setCarts((carts) => [...carts, cart]);
  }


  return (
    <div>
      <Header>
        <div className="content">
          <div className="logo">
            <Basket weight="bold" />
            <strong>
              Me<span>Cart</span>
            </strong>
          </div>

          <button onClick={logout}>
            <SignOut />
          </button>
        </div>
      </Header>

      <Content>
        <nav>
          <button>Menor preço</button>
          <button>Mais recente</button>
        </nav>

        <div className="carts">
          <strong className="cartQuantity">
            Carrinhos <span>{carts.length}</span>
          </strong>

          <ul>
            {carts.map((cart) => {
              return <Cart key={cart.id} cart={cart} />;
            })}
          </ul>
        </div>

        <footer>
          <Button onClick={handleToggleCartOpen}>
            <Plus /> <span>Novo Carrinho</span>
          </Button>
        </footer>
      </Content>

      <CreateCartModal
        cartModalIsOpen={cartOpen}
        onSetCartOnState={handleInsertNewCartOnCarts}
        onOpenModal={handleToggleCartOpen}
      />
    </div>
  );
}
