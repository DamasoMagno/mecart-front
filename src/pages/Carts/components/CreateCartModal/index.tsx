import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useModalStorage } from "../../../../store/modalStorage";
import { useCartsStorage } from "../../../../store/cartsStorage";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";
import { ModalContainer } from "../../../../components/ModalContainer";

import { ICart } from "../../../../store/cartsStorage";

const cartSchemaBody = z.object({
  cartName: z.string({ required_error: "Nome do carrinho obrigatório" }).min(1),
  totalPrice: z.number({ required_error: "Limite da sacola obrigatório" }).min(1),
});

type Cart = z.infer<typeof cartSchemaBody>;

export function EditCartModal() {
  const { toggleCartModal, modalCartIsOpen } = useModalStorage((state) => ({
    modalCartIsOpen: state.modalCartIsOpen,
    toggleCartModal: state.toggleCartModal,
  }));
  const addCart = useCartsStorage((state) => state.addCart);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ICart>({
    resolver: zodResolver(cartSchemaBody),
  });

  const handleCreateCart = (data: Cart) => {
    addCart(data);
    toggleCartModal();
  };

  return (
    <ModalContainer
      title={"Novo carrinho"}
      modalIsOpen={modalCartIsOpen}
      onOpenChangeModal={toggleCartModal}
      onSubmit={handleSubmit(handleCreateCart)}
    >
      <Controller
        control={control}
        name="cartName"
        render={({ field }) => <Input label="Nome do carrinho" {...field} />}
      />
      <Controller
        control={control}
        name="totalPrice"
        render={({ field }) => (
          <Input type="number" label="Limite sacola" step={"0.01"} {...field} />
        )}
      />
      <Button type="submit">Criar novo carrinho</Button>
    </ModalContainer>
  );
}
