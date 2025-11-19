import { create } from "zustand";

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
    theme: Theme;
    setTheme: (s: Theme) => void;
}

export const useTheme = create<ThemeState>((set) => ({
    theme: (localStorage.getItem('appearance') as Theme) || 'system',
    setTheme: (s) => {
        localStorage.setItem('appearance', s);
        document.documentElement.classList.toggle("dark", s === "dark" || (s === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches));
        set({ theme: s });
    },
}));
