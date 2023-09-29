import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useCartsStorage, ICart } from '../../../../store/cartsStorage'
import { useModalStorage } from '../../../../store/modalStorage'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { ModalContainer } from '../../../../components/ModalBase'

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
  const addCart = useCartsStorage(({ addCart }) => addCart)
  const { modalNewCartIsOpen, toggleNewCartModal } = useModalStorage(
    ({ modalNewCartIsOpen, toggleNewCartModal }) => ({
      modalNewCartIsOpen,
      toggleNewCartModal,
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

  const handleCreateCart = async (data: Cart) => {
    try {
      await addCart(data)

      closeModal()
    } catch (error) {}
  }

  return (
    <ModalContainer
      title="Novo carrinho"
      open={modalNewCartIsOpen}
      onOpenChange={closeModal}
    >
      <form onSubmit={handleSubmit(handleCreateCart)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => <Input label="Nome do carrinho" {...field} />}
        />

        <Controller
          control={control}
          name="limit"
          render={({ field }) => (
            <Input
              type="number"
              label="Limite sacola"
              step={'0.01'}
              {...field}
            />
          )}
        />

        <Button type="submit">Criar novo carrinho</Button>
      </form>
    </ModalContainer>
  )
}
