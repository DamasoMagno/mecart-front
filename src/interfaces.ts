export interface IProduct {
  id: number | undefined;
  productName: string;
  quantity: number;
  unity: number;
  cartId: string;
}

export interface ICart {
  id: number;
  cartName: string;
  totalPrice: string;
  createdAt: string;
}


