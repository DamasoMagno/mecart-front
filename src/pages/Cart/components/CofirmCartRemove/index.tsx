import { Trash } from "@phosphor-icons/react";
import * as ConfirmModal from "@radix-ui/react-alert-dialog";

import { Button } from "../../../../components/Button";

import { Overlay, Content } from "./styles";

interface ConfirmCartRemoveProps {
  onRemoveProductFromCart: () => void;
}

export function ConfirmCartRemove({
  onRemoveProductFromCart,
}: ConfirmCartRemoveProps) {
  return (
    <ConfirmModal.Root>
      <ConfirmModal.Trigger asChild>
        <button>
          <Trash />
        </button>
      </ConfirmModal.Trigger>

      <ConfirmModal.Portal>
        <Overlay />

        <Content>
          <div className="description">
            <ConfirmModal.Title>Deseja remover ?</ConfirmModal.Title>
            <ConfirmModal.Description asChild>
              <p>Confirmar a remoção, não terá como reverter</p>
            </ConfirmModal.Description>
          </div>

          <div className="actions">
            <ConfirmModal.Cancel asChild>
              <Button variant={{ ghost: true }}>Cancelar</Button>
            </ConfirmModal.Cancel>
            <span />
            <ConfirmModal.Action asChild>
              <Button
                variant={{ ghost: true }}
                className="remove"
                onClick={onRemoveProductFromCart}
              >
                Remover
              </Button>
            </ConfirmModal.Action>
          </div>
        </Content>
      </ConfirmModal.Portal>
    </ConfirmModal.Root>
  );
}
