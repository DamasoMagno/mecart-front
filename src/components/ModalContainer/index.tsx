import { ComponentProps, ReactNode } from "react";
import { X } from "@phosphor-icons/react";
import * as Modal from "@radix-ui/react-dialog";

import { Overlay, Content } from "./styles";

interface ModalContainerProps extends ComponentProps<"form"> {
  title: string;
  modalIsOpen: boolean;
  onOpenChangeModal: any;
  children: ReactNode;
}

export function ModalContainer({
  title,
  children,
  modalIsOpen,
  onOpenChangeModal,
  ...props
}: ModalContainerProps) {
  return (
    <Modal.Root open={modalIsOpen} onOpenChange={onOpenChangeModal}>
      <Overlay />

      <Modal.Portal>
        <Content>
          <header>
            <Modal.Title>{title}</Modal.Title>
            <Modal.Close asChild>
              <button>
                <X />
              </button>
            </Modal.Close>
          </header>

          <form {...props}>{children}</form>
        </Content>
      </Modal.Portal>
    </Modal.Root>
  );
}
