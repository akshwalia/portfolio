import { create } from "zustand";

export const useStore = create((set) => ({
    selected: 1,
    setSelected: (id) => set({ selected: id }),
}));