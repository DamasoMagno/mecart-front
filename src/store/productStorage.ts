import { create } from 'zustand'

export type IProduct = {
  id: string
  name: string
  quantity: number
  pricePerUnity: number
  cartId: string
}

export interface ProductStorage {
  product: IProduct | null
  setProduct: (product: IProduct) => void
  clearProduct: () => void
}

export const useProductStorage = create<ProductStorage>((set) => ({
  product: null,

  setProduct: (product: IProduct) => {
    return set({ product })
  },

  clearProduct: () => {
    return set({ product: null })
  },
}))
