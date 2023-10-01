import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { X } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import toast from 'react-hot-toast'

import { useCartsStorage, ICart } from '@store/cartsStorage'
import { useTotalCart } from '@hooks/useTotalCart'

import { Button } from '@components/Button'
import { Input } from '@components/Inputs/Input'

import { Container, Form, Content, Overlay, Portal, Close } from './styles'

const cartSchemaBody = z.object({
  title: z
    .string({ required_error: 'Campo obrigatório' })
    .nonempty('Nome do produto requerido'),
  limit: z.coerce
    .number({ required_error: 'Campo obrigatório' })
    .min(0.1, 'Limite da sacola obrigatório'),
})

type Cart = z.infer<typeof cartSchemaBody>

export function EditCartModal() {
  const navigate = useNavigate()

  const { updateCart, removeCart, cart, modalCartIsOpen, toggleCartModal } =
    useCartsStorage((state) => ({
      updateCart: state.updateCart,
      cart: state.cart,
      removeCart: state.removeCart,
      toggleCartModal: state.toggleCartModal,
      modalCartIsOpen: state.modalCartIsOpen,
    }))

  const totalCart = useTotalCart(String(cart?.id))

  const { handleSubmit, control, setValue, reset } = useForm<ICart>({
    resolver: zodResolver(cartSchemaBody),
    defaultValues: {
      title: '',
      limit: 0,
    },
  })

  const handleUpdateCart = (data: Cart) => {
    if (data.limit < totalCart) {
      toast.error('Limite menor que o total existe', {
        style: {
          zIndex: 99999,
        },
      })

      return
    }

    const updattedCart: ICart = {
      id: String(cart?.id),
      title: data.title,
      limit: data.limit,
      created_at: cart?.created_at ?? new Date(),
    }

    updateCart(updattedCart)
    toggleCartModal()
  }

  function handleDeleteCart() {
    removeCart(String(cart?.id))
    navigate('/')
  }

  useEffect(() => {
    reset()

    if (cart?.id) {
      setValue('title', cart.title)
      setValue('limit', cart.limit)
    }
  }, [cart])

  return (
    <Container open={modalCartIsOpen} onOpenChange={toggleCartModal}>
      <Portal>
        <Overlay />

        <Content>
          <header>
            <Close asChild>
              <button>
                <X />
              </button>
            </Close>
          </header>

          <Form onSubmit={handleSubmit(handleUpdateCart)}>
            <div className="inputs">
              <Controller
                control={control}
                name="title"
                render={({ field }) => (
                  <Input id="cart" label="Nome do carrinho" {...field} />
                )}
              />

              <Controller
                control={control}
                name="limit"
                render={({ field }) => (
                  <Input
                    type="number"
                    label="Limite sacola"
                    id="limit"
                    step={0.01}
                    {...field}
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
        </Content>
      </Portal>
    </Container>
  )
}
