import { Trash } from '@phosphor-icons/react'

import { IProductName } from '../../../../types'

import { Container } from './styles'

interface CartProps {
  product: IProductName
  onRemoveProduct: () => void
}

export function Product({ product, onRemoveProduct }: CartProps) {
  return (
    <Container>
      <strong>{product.name}</strong>

      <button onClick={onRemoveProduct}>
        <Trash />
      </button>
    </Container>
  )
}
