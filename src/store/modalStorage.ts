import { create } from "zustand";

type ICart = {
  id: string;
  cartName: string;
  totalPrice: number;
  createdAt: Date;
  status: "pendent" | "finished";
}

interface ModalStorage {
  cart: ICart | null;
  modalCartIsOpen: boolean;
  toggleCartModal: () => void;
  openCartWithData: (cart: ICart | null) => void;
}

export const useModalStorage = create<ModalStorage>((set, get) => ({
  cart: null,
  modalCartIsOpen: false,

  toggleCartModal: () => {
    set({ modalCartIsOpen: !get().modalCartIsOpen, cart: null });
  },

  openCartWithData: (cart: ICart | null) => {
    set({ modalCartIsOpen: true, cart: cart });
  },
}));
