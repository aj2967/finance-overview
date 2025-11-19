import { ClientToastListener } from '@/components/client-toast-listener';
import FlashToastListener from '@/components/flash-toast-listener';
import { Toaster } from '@/components/ui/sonner';
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { useTheme } from '@/stores/useTheme';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => {
    const { theme } = useTheme();

    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}

            {/* Sonner toast */}
            <ClientToastListener />
            <FlashToastListener />
            <Toaster position="top-right" theme={theme} />

        </AppLayoutTemplate>
    )
};
