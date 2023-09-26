export type IProduct = {
  id: string
  productName: string
  quantity: number
  pricePerUnity: number
  cartId: string
}

export type IProductName = {
  id: string
  productName: string
}

export type ICart = {
  id: string
  cartName: string
  totalPrice: number
  createdAt: Date
  status: 'pendent' | 'finished'
}

export type CartInputs = Omit<ICart, 'id' | 'createdAt' | 'status'>
