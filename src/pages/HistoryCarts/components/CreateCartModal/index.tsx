import { X } from "@phosphor-icons/react";
import * as Modal from "@radix-ui/react-dialog";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

import { Overlay, Content } from "./styles";

interface CreateCartModalProps {
  cartModalIsOpen: boolean;
  onOpenModal(): void;
}

export function CreateCartModal({
  onOpenModal,
  cartModalIsOpen,
}: CreateCartModalProps) {
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

          <form>
            <Input placeholder="Nome carrinho" />
            <Input placeholder="Data de compra" type="date" />
            <Input placeholder="Limite da sacola" type="number" />

            <Button type="submit">Criar Carrinho</Button>
          </form>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
