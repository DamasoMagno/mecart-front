import { useEffect } from "react";
import { CurrencyDollar, X } from "@phosphor-icons/react";
import * as Modal from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";

import { ICart } from "../../interfaces";

import { Input } from "../Input";
import { Button } from "../Button";
import { useModalStorage } from "../../store/modalStorage";
import { useCartsStorage } from "../../store/cartsStorage";

import { Overlay, Content } from "./styles";

export function EditCartModal() {
  const { openCartModal, modalCartIsOpen, cart } = useModalStorage((state) => ({
    modalCartIsOpen: state.modalCartIsOpen,
    openCartModal: state.openCartModal,
    cart: state.cart,
  }));
  const { addCart, updateCart } = useCartsStorage((state) => ({
    addCart: state.addCart,
    updateCart: state.updateCart,
  }));

  const { register, handleSubmit, setValue } = useForm<ICart>();

  const handleCreateCart = (data: ICart) => {
    if (cart?.id) {
      updateCart({ ...cart, ...data });
    } else {
      addCart(data);
    }

    openCartModal(false);
  };

  useEffect(() => {
    if (cart?.id) {
      setValue("cartName", cart.cartName);
      setValue("totalPrice", cart.totalPrice);
    }
  }, [cart]);

  return (
    <Modal.Root open={modalCartIsOpen} onOpenChange={openCartModal}>
      <Overlay />

      <Modal.Portal>
        <Content>
          <header>
            <Modal.Title>
              {cart?.id ? "Editar carrinho" : "Novo carrinho"}
            </Modal.Title>
            <Modal.Close asChild>
              <button>
                <X />
              </button>
            </Modal.Close>
          </header>

          <form onSubmit={handleSubmit(handleCreateCart)}>
            <div className="fields">
              <label>Nome do carrinho</label>
              <Input
                register={{
                  ...register("cartName", {
                    required: true,
                  }),
                }}
              />
            </div>

            <div className="fields"> 
              <label>Limite sacola</label>
              <Input
                type="number"
                step={"0.01"}
                icon={CurrencyDollar}
                register={{
                  ...register("totalPrice", {
                    required: true,
                  }),
                }}
              />
            </div>
            <Button type="submit">
              {cart?.id ? "Salvar alterações" : "Criar carrinho"}
            </Button>
          </form>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
