import { X } from "@phosphor-icons/react";
import * as Modal from "@radix-ui/react-dialog";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

import { Overlay, Content } from "./styles";
import { useForm } from "react-hook-form";
import { ICart } from "../../../../interfaces";

interface CreateCartModalProps {
  cartModalIsOpen: boolean;
  onOpenModal(): void;
  onSetCartOnState: (cart: ICart) => void;
}

export function CreateCartModal({
  onOpenModal,
  cartModalIsOpen,
  onSetCartOnState,
}: CreateCartModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICart>();

  function showFields(data: ICart) {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let cart: ICart = {
      id: Math.random(),
      cartName: data.cartName,
      totalPrice: data.totalPrice,
      createdAt: data.createdAt,
    };

    cartsStoraged.push(cart);

    localStorage.setItem("@carts", JSON.stringify([...cartsStoraged]));

    onSetCartOnState(cart);

    onOpenModal();
  }

  return (
    <Modal.Root open={cartModalIsOpen} onOpenChange={onOpenModal}>
      <Overlay />

      <Modal.Portal>
        <Content>
          <header>
            <Modal.Title>Novo Carrinho</Modal.Title>
            <Modal.Close asChild>
              <button>
                <X />
              </button>
            </Modal.Close>
          </header>

          <form onSubmit={handleSubmit(showFields)}>
            <Input
              placeholder="Nome carrinho"
              register={{
                ...register("cartName", {
                  required: true,
                }),
              }}
            />
            <Input
              placeholder="Data de compra"
              type="date"
              register={{
                ...register("createdAt", {
                  required: true,
                }),
              }}
            />
            <Input
              placeholder="Limite da sacola"
              type="number"
              register={{
                ...register("totalPrice", {
                  required: true,
                }),
              }}
            />

            <Button type="submit">Criar Carrinho</Button>
          </form>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
