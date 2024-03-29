import { create } from "zustand";
import { ItemObject } from "./types/Item";

export interface AppStore {
  modalItem: ItemObject | null;
  searchForId: number | null;
  paginationIndex: number;
  totalItemsAmount: number | null;
  errorMessage: string;
  setModalItem: (newModalItem: ItemObject | null) => void;
  setSearchForId: (searchForId: number) => void;
  setPaginationIndex: (paginationIndex: number) => void;
  setTotalItemsAmount: (totalItemsAmount: number) => void;
  setErrorMessage: (error: string) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  modalItem: null,
  searchForId: null,
  paginationIndex: 1,
  totalItemsAmount: null,
  errorMessage: "",
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
  setErrorMessage: (errorMessage: string) =>
    set(() => ({
      errorMessage,
    })),
}));
