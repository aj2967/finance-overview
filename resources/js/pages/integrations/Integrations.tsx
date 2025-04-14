import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Integrations',
        href: '/integrations',
    },
];

interface Props {
    integrations: {
        id: number;
        status: 'active' | 'inactive';
        name: string;
        url: string;
        description: string;
        icon: string;
        category: string;
        tags: string[];
        is_featured: boolean;
    }[];
}

export default function Dashboard({ integrations }: Props) {
    console.log('integrations', integrations);
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Integrations" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 bg-card">
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
                                    <div className='w-full flex justify-between items-center'>
                                        <img
                                            src={integration.icon}
                                            alt={integration.name}
                                            className="w-10 h-10 rounded-sm"
                                        />
                                            {/* <div className='bg-green-500 text-green-900 p-2 shadow-xs rounded-full text-xs'></div> */}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">{integration.name}</h3>
                                        <p className="text-sm text-neutral-500">{integration.description}</p>
                                    </div>
                                </div>
                            )}
                        </Link>

                    )
                    )}


                </div>
            </div>
        </AppLayout>
    );
}
