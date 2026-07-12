import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("connekt-theme") || "forest",
  setTheme: (theme) => {
    localStorage.setItem("connekt-theme", theme);
    set({ theme });
  },
}));
