import { create } from 'zustand'

export interface ModalStorage {
  modalCartIsOpen: boolean
  toggleCartModal: () => void

  modalNewCartIsOpen: boolean
  toggleNewCartModal: () => void

  modalProductIsOpen: boolean
  toggleProductModal: () => void
}

export const useModalStorage = create<ModalStorage>((set, get) => ({
  modalCartIsOpen: false,
  modalNewCartIsOpen: false,
  modalProductIsOpen: false,

  toggleNewCartModal: () => {
    set({ modalNewCartIsOpen: !get().modalNewCartIsOpen })
  },

  toggleCartModal: () => {
    set({ modalCartIsOpen: !get().modalCartIsOpen })
  },

  toggleProductModal: () => {
    set({ modalProductIsOpen: !get().modalProductIsOpen })
  },
}))
