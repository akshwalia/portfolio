import { create } from "zustand";

export const useStore = create((set) => ({
    selected: 1,
    setSelected: (id) => set({ selected: id }),
    nowPlaying: false,
    setNowPlaying: (nowPlaying) => set({ nowPlaying: nowPlaying }),
    loading: true,
    setLoading: (loading) => set({ loading: loading }),
}));