import { Cart } from "./components/Cart";

import { Content } from "./styles";
import { Basket } from "@phosphor-icons/react";
import { EditCartModal } from "../../../components/EditCartModal";
import { useCartsStorage } from "../../../store/cartsStorage";

export function Carts() {
  const { carts } = useCartsStorage((state) => ({
    carts: state.carts,
  }));

  return (
    <>
      <Content>
        <div className="filters">
          <button>Todos</button>
          <button>Finalizados</button>
        </div>

        <div className="carts">
          <strong className="cartQuantity">
            Carrinhos <span>{carts.length}</span>
          </strong>

          <ul>
            {carts.length > 0 ? (
              carts.map((cart) => {
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
