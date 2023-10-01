import { Swiper } from 'swiper/react'
import { CurrencyDollar, Info } from '@phosphor-icons/react'

import { formatPrice } from '@utils/format-price'

import { Resume } from './styles'
import { useCartsStorage } from '@store/cartsStorage'

interface ResumesProps {
  totalPrice: number
}

export const Resumes = ({ totalPrice }: ResumesProps) => {
  const cart = useCartsStorage((state) => state.cart)

  const limitRestant = Number(cart?.limit) - totalPrice || 0
  const statusCompleted = totalPrice >= Number(cart?.limit)
  const fullBag = statusCompleted ? 'Cheia' : 'Livre'

  return (
    <Swiper
      className="resume"
      spaceBetween={12}
      breakpoints={{
        728: {
          slidesPerView: 3,
        },
        350: {
          slidesPerView: 2.1,
        },
        200: {
          slidesPerView: 1,
        },
      }}
    >
      <Resume completed={statusCompleted}>
        <header>
          <span>Status</span>
          <Info />
        </header>
        <strong>Sacola {fullBag}</strong>
      </Resume>

      <Resume completed={statusCompleted}>
        <header>
          <span>Total</span>
          <CurrencyDollar />
        </header>
        <strong>{formatPrice(totalPrice)}</strong>
      </Resume>

      <Resume>
        <header>
          <span>Disponivel</span>
          <CurrencyDollar />
        </header>

        <strong>{formatPrice(limitRestant)}</strong>
      </Resume>
    </Swiper>
  )
}
