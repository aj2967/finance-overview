import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

// Integration Components
import Trading212 from './components/Trading212';
import { Integration, UserIntegration } from '@/types/integration';

interface Props {
    integration: Integration;
    userIntegration: UserIntegration;
}

export default function IntegrationDetailsLayout({ integration, userIntegration }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Integrations',
            href: '/integrations',
        },
        {
            title: integration.name,
            href: `/integrations/${integration.url}`,
        },
    ];
    console.log('details', integration);
    console.log('userIntegration', userIntegration);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={integration.name} />

            <div className="mx-auto max-w-7xl space-y-6 p-6">
                {/* Integration Header */}
                <header className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img src={integration.icon} alt={integration.name} className="h-12 w-12 rounded-lg" />
                        <div>
                            <h1 className="text-2xl font-bold">{integration.name}</h1>
                            <div className="mt-1 flex items-center gap-2">
                                <Badge variant="outline">{integration.category}</Badge>
                                <Badge variant={integration.is_connected ? 'success' : 'destructive'}>
                                    {integration.is_connected ? 'Connected' : 'Not Connected'}
                                </Badge>
                            </div>
                        </div>
                    </div>
                    <a href="https://docs.trading212.com/api" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline">Documentation ↗</Button>
                    </a>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column - Connection & Settings */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Content for Specific Integrations */}
                        {/* TODO: Integration component based on slug */}
                        <Trading212 userIntegration={userIntegration} />
                    </div>

                    {/* Right Column - Additional Info & Actions */}
                    <div className="space-y-6">
                        {/* Integration Details Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Integration Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <p className="text-muted-foreground text-sm">Description</p>
                                    <p className="mt-1">{integration.description}</p>
                                </div>

                                <div>
                                    <p className="text-muted-foreground text-sm">Tags</p>
                                    <div className="mt-2 flex flex-wrap gap-2">
                                        {Array.isArray(integration?.tags) ? (
                                            integration?.tags.map((tag, idx) => (
                                                <Badge key={idx} variant="outline">
                                                    {tag}
                                                </Badge>
                                            ))
                                        ) : (
                                            <Badge variant="outline">None</Badge>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Danger Zone */}
                        {userIntegration && (
                            <Card className="border-destructive">
                                <CardHeader>
                                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="bg-muted flex items-center justify-between rounded-lg p-4 lg:flex-col lg:gap-4 xl:flex-row xl:gap-0">
                                        <div>
                                            <p className="font-medium">Remove Integration</p>
                                            <p className="text-muted-foreground text-sm">Permanently disconnect and remove all data</p>
                                        </div>
                                        <div className="ml-2 flex justify-end lg:w-full xl:w-min">
                                            <Button variant="destructive">Disconnect</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
