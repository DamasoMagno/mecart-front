import { Trash } from "@phosphor-icons/react";
import * as ConfirmModal from "@radix-ui/react-alert-dialog";

import { Button } from "../../../../components/Button";

import { Overlay, Content } from "./styles";
import { IProduct } from "../../../../interfaces";

export function ConfirmCartRemove() {
  function removeProductFromLocalStorage() {
    const productsStoragedByCartId: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    const findProductPosition = productsStoragedByCartId.findIndex(
      (product) => product.id === 0
    );

    productsStoragedByCartId.splice(findProductPosition, 1);
  }

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
                onClick={removeProductFromLocalStorage}
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
