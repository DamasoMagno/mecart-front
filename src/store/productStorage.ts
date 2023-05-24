import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { ICart } from "../interfaces";

interface ProductsStorage {
  products: any[];
  addProduct: (carts: ICart) => void;
  removeProduct: (cartId: string) => void;
}

export const useProductsStorage = create<ProductsStorage>((set, get) => ({
  products: JSON.parse(localStorage.getItem("@productName") as string) || [],

  addProduct: (data: any) => {
    const productsNameStoraged =
      JSON.parse(localStorage.getItem("@productName") as string) || [];

    let product = {
      id: uuidv4(),
      productName: data.productName,
    };

    productsNameStoraged.push(product);
    localStorage.setItem(
      "@productName",
      JSON.stringify([...productsNameStoraged])
    );

    return set({ products: [...get().products, product] });
  },

  removeProduct: (cartId: string) => {
    let products: any[] = JSON.parse(
      localStorage.getItem("@productName") as string
    );

    const findCartById = products.find((cart) => cart.id === cartId);

    if (!findCartById) return;

    products = products.filter((product) => product.id !== cartId);
    localStorage.setItem("@productName", JSON.stringify(products));

    return set({
      products,
    });
  },
}));
