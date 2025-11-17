import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'sonner';

export default function FlashToastListener() {
    const flash = usePage().props.flash as {
        success?: string;
        error?: string;
        info?: string;
    };


    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
        if (flash.error) {
            toast.error(flash.error);
        }
        if (flash.info) {
            toast(flash.info);
        }
    }, [flash]);

    return null;
}
