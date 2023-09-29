import { format } from 'date-fns'
import { Clock, CurrencyDollar } from '@phosphor-icons/react'

import { formatPrice } from '../../../../utils/format-price'
import { ICart } from '../../../../types'

import { Container } from './styles'

interface CartProps {
  cart: ICart
}

export function Cart({ cart }: CartProps) {
  const cartCreatedAt = new Date(cart.created_at)
  const dateFormatted = format(cartCreatedAt, 'dd/MM/yyyy')

  return (
    <Container to={`/cart/${cart.id}`}>
      <strong>{cart.title}</strong>

      <div>
        <time>
          <Clock /> {dateFormatted}
        </time>
        <span>
          <CurrencyDollar /> {formatPrice(Number(cart.limit))}
        </span>
      </div>
    </Container>
  )
}
