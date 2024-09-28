import { create } from "zustand";

export const useStore = create((set) => ({
    selected: 1,
    setSelected: (id) => set({ selected: id }),
    nowPlaying: false,
    setNowPlaying: (nowPlaying) => set({ nowPlaying: nowPlaying }),
    loading: true,
    setLoading: (loading) => set({ loading: loading }),
    showContact: false,
    setShowContact: (showContact) => set({ showContact: showContact }),
    messages: [
        { type: "system", message: "Hi!" },
        { type: "system", message: "I'm Aksh Bot. I'm here to help you with any questions you might have about Aksh's work." },
        { type: "system", message: "How can I help you today?" }
    ],
    setMessages: (messages) => set({ messages: messages }),
}));