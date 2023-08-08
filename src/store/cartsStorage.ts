import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export type IProduct = {
  id: string;
  productName: string;
  quantity: number;
  pricePerUnity: number;
  cartId: string;
}

export type IProductName = {
  id: string;
  productName: string;
}

export type ICart = {
  id: string;
  cartName: string;
  totalPrice: number;
  createdAt: Date;
  status: "pendent" | "finished";
}

export type CartInputs = Omit<ICart, "id" | "createdAt" | "status">;

interface CartsStorage {
  carts: ICart[];
  cart: ICart | null;
  loadCarts: () => void;
  setCart: (cartId: string) => void;
  addCart: (carts: CartInputs) => void;
  updateCart: (cart: ICart) => void;
  removeCart: (id: string) => void;
}

export const useCartsStorage = create<CartsStorage>((set, get) => ({
  carts: JSON.parse(localStorage.getItem("@carts") as string) || [],
  cart: null,

  loadCarts: () => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    return set({
      carts: cartsStoraged,
      cart: null
    });
  },

  addCart: (data: CartInputs) => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let cart: ICart = {
      id: uuidv4(),
      cartName: data.cartName,
      totalPrice: data.totalPrice,
      createdAt: new Date(),
      status: "finished",
    };

    cartsStoraged.push(cart);
    localStorage.setItem("@carts", JSON.stringify([...cartsStoraged]));

    return set({ carts: [...get().carts, cart] });
  },

  setCart: (id: string) => {
    let cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let findCartById = cartsStoraged.find((cart) => cart.id === id);

    if (!findCartById) return;

    return set({
      cart: findCartById,
    });
  },

  updateCart: (data: ICart) => {
    let cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let findCartById = cartsStoraged.findIndex((cart) => cart.id === data.id);

    cartsStoraged[findCartById] = {
      ...cartsStoraged[findCartById],
      ...data,
    };

    localStorage.setItem("@carts", JSON.stringify([...cartsStoraged]));
    
    return set({
      carts: cartsStoraged,
      cart: cartsStoraged[findCartById],
    });
  },

  removeCart: (id: string) => {
    let carts: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];
    let products: IProduct[] =
      JSON.parse(localStorage.getItem("@products") as string) || [];

    const findCartById = carts.find((cart) => cart.id === id);

    if (!findCartById) return;

    carts = carts.filter((cart) => cart.id !== findCartById.id);
    products = products.filter((product) => product.cartId !== findCartById.id);

    localStorage.setItem("@carts", JSON.stringify(carts));
    localStorage.setItem("@products", JSON.stringify(products));

    return set({
      carts: carts,
    });
  },
}));
