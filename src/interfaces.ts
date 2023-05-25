export interface IProduct {
  id: string;
  productName: string;
  quantity: number;
  pricePerUnity: number;
  cartId: string;
}

export interface ICart {
  id: string;
  cartName: string;
  totalPrice: number;
  createdAt: Date;
  status: "pendent" | "finished";
}

export interface IProductName {
  id: string;
  productName: string;
}


