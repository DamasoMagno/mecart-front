import { X } from "@phosphor-icons/react";
import * as Modal from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";

import { Input } from "../../../../../components/Input";
import { Button } from "../../../../../components/Button";

import { Overlay, Content } from "./styles";
import { useModalStorage } from "../../../../../store/modalStorage";
import { useProductsStorage } from "../../../../../store/productStorage";

export function CreateProductModal() {
  const { productModalIsOpen, openProductModal } = useModalStorage((state) => ({
    productModalIsOpen: state.modalProductIsOpen,
    openProductModal: state.openProductModal,
  }));
  const { addProduct } = useProductsStorage((state) => ({
    addProduct: state.addProduct,
  }));

  const { register, handleSubmit } = useForm();

  function createNewProduct(data: any) {
    addProduct(data);
    openProductModal(false);
  }

  return (
    <Modal.Root open={productModalIsOpen} onOpenChange={openProductModal}>
      <Overlay />

      <Modal.Portal>
        <Content>
          <header>
            <Modal.Title>Novo produto</Modal.Title>
            <Modal.Close asChild>
              <button>
                <X />
              </button>
            </Modal.Close>
          </header>

          <form onSubmit={handleSubmit(createNewProduct)}>
            <Input
              register={{
                ...register("productName", {
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
