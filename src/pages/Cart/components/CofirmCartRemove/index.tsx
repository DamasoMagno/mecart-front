import * as ConfirmModal from "@radix-ui/react-alert-dialog";

import { Overlay, Content } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { Button } from "../../../../components/Button";

export function ConfirmCartRemove() {
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
              <Button variant={{ ghost: true }} className="remove">
                Remover
              </Button>
            </ConfirmModal.Action>
          </div>
        </Content>
      </ConfirmModal.Portal>
    </ConfirmModal.Root>
  );
}
