import { useEffect, useState } from "react";
import { Basket, MagnifyingGlass, Plus, Power } from "@phosphor-icons/react";

import { useModalStorage } from "../../store/modalStorage";
import { useCartsStorage } from "../../store/cartsStorage";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Cart } from "./components/Cart";
import { Header } from "../../components/Header";
import { EditCartModal } from "./components/CreateCartModal";

import { ICart } from "../../store/cartsStorage";

import { Content, Logo, Actions } from "./styles";

export function Home() {
  const openCartModal = useModalStorage((state) => state.toggleCartModal);
  const { carts, loadCarts } = useCartsStorage((state) => ({
    carts: state.carts,
    loadCarts: state.loadCarts,
  }));

  const [cartsFiltered, setCartsFiltered] = useState<ICart[]>(carts);
  const [filter, setFilter] = useState<string>("");

  function handleFilterItems() {

    const productsFiltered = carts.filter((cart) => {
      return cart.cartName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  });

    if (!productsFiltered.length) return;

    setCartsFiltered(productsFiltered);
    setFilter("");
  }

  useEffect(() => loadCarts(), []);

  useEffect(() => {
    setCartsFiltered(carts);
  }, [carts]);

  return (
    <>
      <Header>
        <Logo>
          <Basket weight="bold" />
          <strong>
            Me<span>Cart</span>
          </strong>
        </Logo>

        <Actions>
          <Button onClick={openCartModal}>
            <Plus />
            <span>Novo carrinho</span>
          </Button>
          {/* <button className="logout">
            <Power />
          </button> */}
        </Actions>
      </Header>

      <Content>
        <strong className="cartQuantity">
          Carrinhos
          <span>{cartsFiltered.length}</span>
        </strong>

        <div className="filter">
          <Input
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="Buscar carrinho"
          />
          <Button variant={{ outline: true }} onClick={handleFilterItems}>
            <MagnifyingGlass />
          </Button>
        </div>

        <ul>
          {cartsFiltered.length > 0 ? (
            cartsFiltered.map((cart) => {
              return <Cart key={cart.id} cart={cart} />;
            })
          ) : (
            <div className="no-content">
              <Basket weight="bold" size={50} />
              <p>Você não possui carrinhos cadastrados</p>
            </div>
          )}
        </ul>
      </Content>

      <EditCartModal />
    </>
  );
}
