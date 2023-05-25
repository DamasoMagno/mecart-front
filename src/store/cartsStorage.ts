import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { ICart, IProduct } from "../interfaces";

interface CartsStorage {
  carts: ICart[];
  cart: ICart | null;
  setCart: (cartId: string) => void;
  addCart: (carts: ICart) => void;
  updateCart: (cart: ICart) => void;
  removeCart: (id: string) => void;
  finishCart: (id: string) => void;
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
      status: "pendent",
    };

    cartsStoraged.push(cart);
    localStorage.setItem("@carts", JSON.stringify([...cartsStoraged]));

    return set({ carts: [...get().carts, cart] });
  },

  updateCart: (data: ICart) => {
    let cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let findCartById = cartsStoraged.findIndex((cart) => cart.id === data.id);

    if(cartsStoraged[findCartById].totalPrice < Number(data.totalPrice)){
      throw new Error("Não é permitido inserir valor menor que o já posto");
    }

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

  setCart: (id: string) => {
    let cartsStoraged: ICart[] =
      JSON.parse(localStorage.getItem("@carts") as string) || [];

    let findCartById = cartsStoraged.find((cart) => cart.id === id);

    if (!findCartById) return;

    return set({
      cart: findCartById,
    });
  },

  finishCart: (id: string) => {
    let cartsStoraged: ICart[] =
    JSON.parse(localStorage.getItem("@carts") as string) || [];
    
    let findCartById = cartsStoraged.findIndex((cart) => cart.id === id);
    
    if (!!findCartById) return;
    
    cartsStoraged[findCartById] = {
      ...cartsStoraged[findCartById],
      status: "finished",
    };
    
    localStorage.setItem("@carts", JSON.stringify([...cartsStoraged]));
    return set({
      carts: cartsStoraged,
      cart: cartsStoraged[findCartById],
    });
  },
}));
