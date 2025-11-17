import { ClientToastListener } from '@/components/client-toast-listener';
import FlashToastListener from '@/components/flash-toast-listener';
import { Toaster } from '@/components/ui/sonner';
import { useAppearance } from '@/hooks/use-appearance';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const { appearance } = useAppearance();
    console.log(appearance)

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}

            {/* Sonner toast */}
            <ClientToastListener />
            <FlashToastListener />
            <Toaster position="top-right" theme={appearance} />

        </AppLayoutTemplate>
    )
};
