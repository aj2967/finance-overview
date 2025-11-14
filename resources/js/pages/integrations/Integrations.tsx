import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Integration } from '@/types/integration';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Integrations',
        href: '/integrations',
    },
];

interface Props {
    integrations: Integration[];
}

export default function Integrations({ integrations }: Props) {
    console.log('integrations', integrations);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Integrations" />
            <div className="bg-card flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {integrations.map((integration, idx) => (
                        <Link
                            href={`/integrations/${integration.url}`}
                            prefetch
                            key={idx}
                            // className="aspect-video"
                            className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4 md:p-4"
                        >
                            {integration.status === 'inactive' ? (
                                <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                            ) : (
                                <div className="flex flex-col gap-4">
                                    <div className="flex w-full items-center justify-between">
                                        <img src={integration.icon} alt={integration.name} className="h-10 w-10 rounded-sm" />
                                        <div className="rounded-md p-2 text-xs bg-sidebar-border/70 dark:bg-sidebar-border">
                                            {integration.category.charAt(0).toUpperCase() + integration.category.slice(1)}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{integration.name}</h3>
                                        <p className="text-sm text-neutral-500">{integration.description}</p>
                                    </div>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
