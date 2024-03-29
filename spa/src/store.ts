import { create } from "zustand";
import { ItemObject } from "./types/Item";

export interface AppStore {
  modalItem: ItemObject | null;
  searchForId: number | null;
  paginationIndex: number;
  totalItemsAmount: number | null;
  setModalItem: (newModalItem: ItemObject | null) => void;
  setSearchForId: (searchForId: number) => void;
  setPaginationIndex: (paginationIndex: number) => void;
  setTotalItemsAmount: (totalItemsAmount: number) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  modalItem: null,
  searchForId: null,
  paginationIndex: 1,
  totalItemsAmount: null,
  setModalItem: (newModalItem: ItemObject | null) =>
    set(() => ({
      modalItem: newModalItem,
    })),
  setSearchForId: (searchForId: number) =>
    set(() => ({
      searchForId,
    })),
  setPaginationIndex: (paginationIndex: number) =>
    set(() => ({
      paginationIndex,
    })),
  setTotalItemsAmount: (totalItemsAmount: number) =>
    set(() => ({
      totalItemsAmount,
    })),
}));
