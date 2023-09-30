import { IProduct } from '../types'
import { useProductStorage } from '@store/productsStorage'

export function calculateTotalPrice(cartId: string, products: IProduct[]) {
  const totalPriceInCart = products.reduce(
    (accumulator: number, currentValue: IProduct) => {
      if (currentValue.cartId === cartId) {
        const totalCartPrice =
          currentValue.quantity * currentValue.pricePerUnity + accumulator

        return totalCartPrice
      }

      return 0
    },
    0,
  )

  return totalPriceInCart
}

export function useTotalCart(cartId: string) {
  const products = useProductStorage((state) => state.products)
  const totalPriceInCart = calculateTotalPrice(cartId, products)
  return totalPriceInCart
}
