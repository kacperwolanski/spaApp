import { create } from "zustand";
import { ItemObject } from "./types/Item";

export interface AppStore {
  modalItem: ItemObject | null;
  searchForId: number | null;
  setModalItem: (newModalItem: ItemObject | null) => void;
  setSearchForId: (searchForId: number) => void;
}

export const useAppStore = create<AppStore>()((set) => ({
  modalItem: null,
  searchForId: null,
  setModalItem: (newModalItem: ItemObject | null) =>
    set(() => ({
      modalItem: newModalItem,
    })),
  setSearchForId: (searchForId: number) =>
    set(() => ({
      searchForId,
    })),
}));
