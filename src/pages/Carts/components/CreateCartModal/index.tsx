import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useModalStorage } from '../../../../store/modalStorage'
import { useCartsStorage, ICart } from '../../../../store/cartsStorage'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { ModalContainer } from '../../../../components/ModalContainer'

import { cartSchemaBody } from '../../../../validations/Cart'

type Cart = z.infer<typeof cartSchemaBody>

export function CreateCartModal() {
  const { toggleCartModal, modalCartIsOpen } = useModalStorage((state) => ({
    modalCartIsOpen: state.modalCartIsOpen,
    toggleCartModal: state.toggleCartModal,
  }))
  const addCart = useCartsStorage((state) => state.addCart)
  const { handleSubmit, control } = useForm<ICart>({
    resolver: zodResolver(cartSchemaBody),
  })

  const handleCreateCart = (data: Cart) => {
    addCart(data)
    toggleCartModal()
  }

  return (
    <ModalContainer
      title="Novo carrinho"
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
        render={({ field: { onChange, ...props } }) => (
          <Input
            type="number"
            label="Limite sacola"
            step={'0.01'}
            {...props}
            onChange={(e) => onChange(Number(e.target.value))}
          />
        )}
      />

      <Button type="submit">Criar novo carrinho</Button>
    </ModalContainer>
  )
}
