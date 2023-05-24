import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { ICart, IProduct } from "../interfaces";

interface CartsStorage {
  carts: ICart[];
  cart: ICart | null;
  setCart: (cartId: string) => void;
  addCart: (carts: ICart) => void;
  removeCart: (cartId: string) => void;
  updateCart: (cart: ICart) => void;
}

export const useCartsStorage = create<CartsStorage>((set, get) => ({
  carts: JSON.parse(localStorage.getItem("@carts") as string) || [],
  cart: null,

  addCart: (data: ICart) => {
    const cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let cart: ICart = {
      id: uuidv4(),
      cartName: data.cartName,
      totalPrice: data.totalPrice,
      createdAt: new Date(),
    };

    cartsStoraged.push(cart);
    localStorage.setItem("@carts", JSON.stringify([...cartsStoraged]));

    return set({ carts: [...get().carts, cart] });
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

  removeCart: (cartId: string) => {
    let carts: ICart[] = JSON.parse(localStorage.getItem("@carts") as string);
    let products: IProduct[] = JSON.parse(
      localStorage.getItem("@products") as string
    );

    const findCartById = carts.find((cart) => cart.id === cartId);

    if (!findCartById) return;

    carts = carts.filter((cart) => cart.id !== findCartById.id);
    products = products.filter((product) => product.cartId !== findCartById.id);

    localStorage.setItem("@carts", JSON.stringify(carts));
    localStorage.setItem("@products", JSON.stringify(products));

    return set({
      carts: carts,
    });
  },

  setCart: (id: string) => {
    let cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let findCartById = cartsStoraged.find((cart) => cart.id === id);

    if (!findCartById) {
      console.log("Está vindo aqui");
      return;
    }

    return set({
      cart: findCartById,
    });
  },
}));
