import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { X } from '@phosphor-icons/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { useCartsStorage, ICart } from '../../../../store/cartsStorage'

import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'

import { Container, Form, Content } from './styles'
import { useModalStorage } from '../../../../store/modalStorage'

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

  const { updateCart, removeCart, cart } = useCartsStorage((state) => ({
    updateCart: state.updateCart,
    removeCart: state.removeCart,
    cart: state.cart,
  }))

  const { toggleCartModal, modalCartIsOpen } = useModalStorage((state) => ({
    toggleCartModal: state.toggleCartModal,
    modalCartIsOpen: state.modalCartIsOpen,
  }))

  const { handleSubmit, control, setValue } = useForm<ICart>({
    resolver: zodResolver(cartSchemaBody),
    defaultValues: {
      title: '',
      limit: 0,
    },
  })

  const handleCreateCart = (data: Cart) => {
    const updattedCart: ICart = {
      id: String(cart?.id),
      title: data.title,
      limit: data.limit,
      created_at: cart?.created_at ?? new Date(),
    }

    updateCart(updattedCart)
  }

  function handleDeleteCart() {
    removeCart(String(cart?.id))

    navigate('/')
  }

  useEffect(() => {
    if (cart?.id) {
      setValue('title', cart.title)
      setValue('limit', cart.limit)
    }
  }, [cart, setValue])

  return (
    <Container closed={!modalCartIsOpen}>
      <Content>
        <header>
          <button onClick={toggleCartModal}>
            <X />
          </button>
        </header>

        <Form onSubmit={handleSubmit(handleCreateCart)}>
          <div className="inputs">
            <Controller
              control={control}
              name="title"
              render={({ field }) => (
                <Input label="Nome do carrinho" {...field} />
              )}
            />

            <Controller
              control={control}
              name="limit"
              render={({ field }) => (
                <Input
                  type="number"
                  label="Limite sacola"
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
    </Container>
  )
}
