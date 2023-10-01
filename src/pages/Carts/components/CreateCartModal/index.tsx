import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCartsStorage } from '@store/cartsStorage'
import { ICart } from 'src/types'

import { Input } from '@components/Inputs/Input'
import { Button } from '@components/Button'
import { ModalContainer } from '@components/ModalBase'

import { Form } from './styles'

const cartSchemaBody = z.object({
  title: z
    .string({ required_error: 'Campo obrigatório' })
    .nonempty('Nome do produto requerido'),
  limit: z.coerce
    .number({ required_error: 'Campo obrigatório' })
    .min(0.1, 'Limite da sacola obrigatório'),
})

type Cart = z.infer<typeof cartSchemaBody>

export function CreateCartModal() {
  const { addCart, modalNewCartIsOpen, toggleNewCartModal } = useCartsStorage(
    (state) => ({
      addCart: state.addCart,
      toggleNewCartModal: state.toggleNewCartModal,
      modalNewCartIsOpen: state.modalNewCartIsOpen,
    }),
  )

  const { handleSubmit, control, reset } = useForm<ICart>({
    resolver: zodResolver(cartSchemaBody),
    defaultValues: {
      title: '',
      limit: 0,
    },
  })

  function closeModal() {
    reset()
    toggleNewCartModal()
  }

  function handleCreateCart(data: Cart) {
    addCart(data)
    closeModal()
  }

  return (
    <ModalContainer
      title="Novo carrinho"
      open={modalNewCartIsOpen}
      onOpenChange={closeModal}
    >
      <Form onSubmit={handleSubmit(handleCreateCart)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => <Input label="Nome do carrinho" {...field} />}
        />

        <Controller
          control={control}
          name="limit"
          render={({ field }) => (
            <Input type="number" label="Limite sacola" step={0.01} {...field} />
          )}
        />

        <Button type="submit">Criar novo carrinho</Button>
      </Form>
    </ModalContainer>
  )
}
