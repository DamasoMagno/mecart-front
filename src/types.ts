export interface IProduct {
  id: string
  name: string
  quantity: number
  pricePerUnity: number
  cartId: string
}

export interface IProductName {
  id: string
  name: string
}

export interface ICart {
  id: string
  title: string
  limit: number
  created_at: Date
}
