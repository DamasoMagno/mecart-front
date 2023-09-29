import { Swiper } from 'swiper/react'
import { CurrencyDollar, Info } from '@phosphor-icons/react'

import { formatPrice } from '../../../../utils/format-price'

import { Resume } from './styles'

interface ResumesProps {
  totalPrice: number
  limit: number
}

export const Resumes = ({ totalPrice, limit }: ResumesProps) => {
  const statusCompleted = totalPrice >= limit
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
          <span>Total na sacola</span>
          <CurrencyDollar />
        </header>
        <strong>{formatPrice(totalPrice)}</strong>
      </Resume>

      <Resume>
        <header>
          <span>Limite da sacola</span>
          <CurrencyDollar />
        </header>

        <strong>{formatPrice(limit)}</strong>
      </Resume>
    </Swiper>
  )
}
