import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { X } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { cartSchemaBody } from "../../../../validations/Cart";
import { useCartsStorage } from "../../../../store/cartsStorage";
import { useModalStorage } from "../../../../store/modalStorage";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { Container, Form } from "./styles";
import { ICart } from "../../../../store/cartsStorage";

type Cart = z.infer<typeof cartSchemaBody>;

export function Drawer() {
  const navigate = useNavigate();

  const { toggleCartModal, modalCartIsOpen, cart } = useModalStorage(
    (state) => ({
      modalCartIsOpen: state.modalCartIsOpen,
      toggleCartModal: state.toggleCartModal,
      cart: state.cart,
    })
  );
  const { updateCart, removeCart } = useCartsStorage((state) => ({
    updateCart: state.updateCart,
    removeCart: state.removeCart,
  }));

  const { handleSubmit, control, setValue } = useForm<ICart>({
    resolver: zodResolver(cartSchemaBody),
  });

  const handleCreateCart = (data: Cart) => {
    const updattedCart: ICart = {
      ...cart!,
      cartName: data.cartName,
      totalPrice: data.totalPrice,
    };

    updateCart(updattedCart);
    toggleCartModal();
  };

  function handleDeleteCart() {
    removeCart(String(cart?.id));
    toggleCartModal();

    navigate("/");
  }

  useEffect(() => {
    if (cart?.id) {
      setValue("cartName", cart.cartName);
      setValue("totalPrice", cart.totalPrice);
    }
  }, [cart]);

  return (
    <Container closed={!modalCartIsOpen}>
      <header>
        <button onClick={toggleCartModal}>
          <X />
        </button>
      </header>

      <Form onSubmit={handleSubmit(handleCreateCart)}>
        <div className="inputs">
          <Controller
            control={control}
            name="cartName"
            render={({ field }) => (
              <Input label="Nome do carrinho" {...field} />
            )}
          />

          <Controller
            control={control}
            name="totalPrice"
            render={({ field: { onChange, ...props } }) => (
              <Input
                type="number"
                label="Limite sacola"
                step={"0.01"}
                {...props}
                onChange={(e) => onChange(Number(e.target.value))}
              />
            )}
          />

          <button type="button" onClick={handleDeleteCart}>
            Remover
          </button>
        </div>

        <Button variant={{ ghost: true }} type="submit">
          Salvar alterações
        </Button>
      </Form>
    </Container>
  );
}
