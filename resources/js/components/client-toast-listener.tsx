import { useAppToasts } from '@/stores/useAppToasts';
import { useEffect } from 'react';
import { toast } from 'sonner';

export function ClientToastListener() {
    const pop = useAppToasts((s) => s.pop);

    useEffect(() => {
        const interval = setInterval(() => {
            const next = pop();
            if (next) {
                switch (next.variant) {
                    case 'success':
                        toast.success(next.message);
                        break;
                    case 'error':
                        toast.error(next.message);
                        break;
                    case 'loading':
                        toast.loading(next.message);
                        break;
                    default:
                        toast(next.message);
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [pop]);

    return null;
}
