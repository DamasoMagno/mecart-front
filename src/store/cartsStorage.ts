import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { ICart, IProduct } from 'src/types'

export type CartInputs = Omit<ICart, 'id' | 'created_at'>

export interface CartsStorage {
  carts: ICart[]
  cart: ICart | null
  modalCartIsOpen: boolean
  modalNewCartIsOpen: boolean

  toggleCartModal: () => void
  toggleNewCartModal: () => void
  loadCarts: () => void
  setCart: (cartId: string) => void
  addCart: (carts: CartInputs) => Promise<void>
  updateCart: (cart: ICart) => void
  removeCart: (id: string) => void
}

export const useCartsStorage = create<CartsStorage>((set, get) => ({
  carts: JSON.parse(localStorage.getItem('@carts') as string) || [],
  cart: null,
  modalCartIsOpen: false,
  modalNewCartIsOpen: false,

  toggleNewCartModal: () => {
    set({ modalNewCartIsOpen: !get().modalNewCartIsOpen })
  },

  toggleCartModal: () => {
    set({ modalCartIsOpen: !get().modalCartIsOpen })
  },

  loadCarts: () => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem('@carts') as string) || []

    return set({
      carts: cartsStoraged,
      cart: null,
    })
  },

  addCart: async (data: CartInputs) => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem('@carts') as string) || []

    const cart: ICart = {
      id: uuidv4(),
      title: data.title,
      limit: data.limit,
      created_at: new Date(),
    }

    cartsStoraged.push(cart)
    localStorage.setItem('@carts', JSON.stringify([...cartsStoraged]))

    return set({ carts: cartsStoraged })
  },

  setCart: (id: string) => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem('@carts') as string) || []

    const cart = cartsStoraged.find((cart) => cart.id === id)

    if (!cart) return

    return set({ cart })
  },

  updateCart: (data: ICart) => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem('@carts') as string) || []

    const cartFinded = cartsStoraged.find((cart) => cart.id === data.id)

    const cartsUpdated = cartsStoraged.map((cart) => {
      return cart.id === cartFinded?.id ? data : cart
    })

    localStorage.setItem('@carts', JSON.stringify(cartsUpdated))

    return set({
      carts: cartsUpdated,
      cart: data,
    })
  },

  removeCart: (id: string) => {
    let carts: ICart[] =
      JSON.parse(localStorage.getItem('@carts') as string) || []
    let products: IProduct[] =
      JSON.parse(localStorage.getItem('@items') as string) || []

    carts = carts.filter((cart) => cart.id !== id)
    products = products.filter((product) => product.cartId !== id)

    localStorage.setItem('@carts', JSON.stringify(carts))
    localStorage.setItem('@items', JSON.stringify(products))

    return set({
      carts,
    })
  },
}))
