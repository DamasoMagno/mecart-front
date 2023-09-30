import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export type IProduct = {
  id: string
  name: string
  quantity: number
  pricePerUnity: number
  cartId: string
}

export type IProductInput = {
  name: string
  quantity: number
  pricePerUnity: number
}

export interface ProductStorage {
  product: IProduct | null
  products: IProduct[]
  setProduct: (product: IProduct | null) => void
  createProduct: (cartId: string, product: IProductInput) => void
  removeProduct: (product: IProduct) => void
  updateProduct: (productInput: IProduct) => void
  updateProducts: (productInput: IProduct[]) => void
}

export const useProductStorage = create<ProductStorage>((set, get) => ({
  product: null,
  products: JSON.parse(localStorage.getItem('@items') as string) || [],

  setProduct: (product: IProduct | null) => {
    set({ product })
  },

  createProduct: (cartId: string, product: IProductInput) => {
    const products = get().products

    const newProduct: IProduct = {
      id: uuidv4(),
      pricePerUnity: product.pricePerUnity,
      name: product.name,
      quantity: product.quantity,
      cartId: String(cartId),
    }

    products.push(newProduct)
    localStorage.setItem('@items', JSON.stringify(products))

    set({
      products,
    })
  },

  updateProduct: (productInput: IProduct) => {
    let products = get().products

    products = products.map((currentProduct) => {
      return currentProduct.id === productInput.id
        ? {
            ...currentProduct,
            ...productInput,
          }
        : currentProduct
    })

    localStorage.setItem('@items', JSON.stringify(products))

    set({
      products,
    })
  },

  updateProducts: (products: IProduct[]) => {
    localStorage.setItem('@items', JSON.stringify(products))

    set({
      products,
    })
  },

  removeProduct: (productInput: IProduct) => {
    const products = get().products

    const removeProducts = products.filter(
      (currentProduct) => currentProduct.id !== productInput.id,
    )

    localStorage.setItem('@items', JSON.stringify(removeProducts))

    set({
      products: removeProducts,
      product: null,
    })
  },
}))
