import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Integrations',
        href: '/integrations',
    },
];

interface Props {
    integrations: {
        id: number;
        name: string;
        description: string;
        icon: string;
        url: string;
    }[];
}

export default function Dashboard({ integrations }: Props) {
    console.log('integrations', integrations);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Integrations" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">

                    {Array.from({ length: 6 }).map((_, idx) => (
                        <div key={idx} className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border">
                            <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </div>
                    ))}


                </div>
            </div>
        </AppLayout>
    );
}
