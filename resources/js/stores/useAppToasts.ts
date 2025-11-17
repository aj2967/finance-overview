import { create } from 'zustand';

type AppToast = {
    message: string;
    variant?: 'success' | 'error' | 'info' | 'warning' | 'loading';
};

interface ToastState {
    queue: AppToast[];
    push: (toast: AppToast) => void;
    pop: () => AppToast | undefined;
}

export const useAppToasts = create<ToastState>((set, get) => ({
    queue: [],
    push: (t) => set((s) => ({ queue: [...s.queue, t] })),
    pop: () => {
        const q = [...get().queue];
        const next = q.shift();
        set({ queue: q });
        return next;
    },
}));
