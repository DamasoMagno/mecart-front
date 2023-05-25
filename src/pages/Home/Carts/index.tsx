import { Cart } from "./components/Cart";

import { Content } from "./styles";
import { Basket, MagnifyingGlass } from "@phosphor-icons/react";
import { EditCartModal } from "../../../components/EditCartModal";
import { useCartsStorage } from "../../../store/cartsStorage";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { useEffect, useState } from "react";

export function Carts() {
  const carts = useCartsStorage((state) => state.carts);

  const [cartsFiltered, setCartsFiltered] = useState(carts);
  const [filter, setFilter] = useState("");

  function handleFilterItems(filter: string) {
    const productsFiltered = carts.filter((cart) =>
      cart.cartName.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    setCartsFiltered(productsFiltered);
    setFilter("");
  }

  useEffect(() => {
    setCartsFiltered(carts);
  }, [carts])

  return (
    <>
      <Content>
        <div className="find">
          <Input
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            placeholder="Buscar produto"
          />
          <Button
            variant={{ outline: true }}
            onClick={() => handleFilterItems(filter)}
          >
            <MagnifyingGlass />
          </Button>
        </div>

        <div className="carts">
          <strong className="cartQuantity">
            Carrinhos <span>{cartsFiltered.length}</span>
          </strong>

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
        </div>
      </Content>
      <EditCartModal />
    </>
  );
}
