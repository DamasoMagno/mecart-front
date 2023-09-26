import { format } from 'date-fns'
import { Clock, CurrencyDollar } from '@phosphor-icons/react'

import { formatPrice } from '../../../../utils/format-price'
import { ICart } from '../../../../types'

import { Container } from './styles'

interface CartProps {
  cart: ICart
}

export function Cart({ cart }: CartProps) {
  const cartCreatedAt = new Date(cart.createdAt)
  const dateFormatted = format(cartCreatedAt, 'dd/MM/yyyy')

  return (
    <Container to={`/cart/${cart.id}`}>
      <strong>{cart.cartName}</strong>

      <div>
        <time>
          <Clock /> {dateFormatted}
        </time>
        <span>
          <CurrencyDollar /> {formatPrice(Number(cart.totalPrice))}
        </span>
      </div>
    </Container>
  )
}
