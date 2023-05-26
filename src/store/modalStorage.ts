import { create } from "zustand";
import { ICart, IProduct } from "../interfaces";

interface ModalStorage {
  modalCartIsOpen: boolean;
  modalProductIsOpen: boolean;
  cart?: ICart | null;
  product?: IProduct | null;
  openCartModal: (toggleCartIsOpen: boolean, cart?: ICart | null) => void;
  openProductModal: (toggleProductIsOpen: boolean, product?: IProduct | null) => void;
}

export const useModalStorage = create<ModalStorage>((set) => ({
  modalCartIsOpen: false,
  modalProductIsOpen: false,
  cart: null,
  product: null,
  
  openCartModal: (toggleCartIsOpen, cart) =>
    set({ modalCartIsOpen: toggleCartIsOpen, cart }),
  openProductModal: (toggleProductIsOpen, product) =>
    set({ modalProductIsOpen: toggleProductIsOpen, product }),
}));


