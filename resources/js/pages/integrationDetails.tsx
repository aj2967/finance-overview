import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
    integration: {
        id: number;
        status: 'active' | 'inactive';
        name: string;
        url: string;
        description: string;
        icon: string;
        category: string;
        tags: [] | string;
        is_featured: boolean;
    };
    children?: React.ReactNode;
}

export default function IntegrationDetails({ integration, children }: Props) {
    console.log(integration.tags);
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
                                <Badge variant={integration.status === 'active' ? 'success' : 'destructive'}>{integration.status}</Badge>
                            </div>
                        </div>
                    </div>
                    <Button variant="outline">Documentation ↗</Button>
                </header>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Left Column - Connection & Settings */}
                    <div className="space-y-6 lg:col-span-2">
                        {/* Connection Status Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Connection</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="api-key">API Key</Label>
                                    <div className="flex gap-2">
                                        <Input id="api-key" type="password" placeholder="Enter your API key" className="flex-1" />
                                        <Button variant="secondary">Test Connection</Button>
                                    </div>
                                </div>

                                <div className="bg-muted flex items-center justify-between rounded-lg p-4">
                                    <div>
                                        <p className="font-medium">Auto-sync</p>
                                        <p className="text-muted-foreground text-sm">Enable automatic data synchronization</p>
                                    </div>
                                    <Switch />
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2">
                                <Button variant="outline">Disconnect</Button>
                                <Button>Save Changes</Button>
                            </CardFooter>
                        </Card>

                        {/* Data Management Section */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Data Management</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-muted flex items-center justify-between rounded-lg p-4">
                                    <div>
                                        <p className="font-medium">Last Synced</p>
                                        <p className="text-muted-foreground text-sm">January 15, 2024 at 14:30</p>
                                    </div>
                                    <Button variant="secondary">Sync Now</Button>
                                </div>

                                <div className="space-y-2">
                                    <Label>Sync Frequency</Label>
                                    <Tabs defaultValue="daily">
                                        <TabsList>
                                            <TabsTrigger value="daily">Daily</TabsTrigger>
                                            <TabsTrigger value="weekly">Weekly</TabsTrigger>
                                            <TabsTrigger value="manual">Manual</TabsTrigger>
                                        </TabsList>
                                    </Tabs>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Children Content for Specific Integrations */}
                        {children}
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
                        <Card className="border-destructive">
                            <CardHeader>
                                <CardTitle className="text-destructive">Danger Zone</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-muted flex items-center justify-between rounded-lg p-4">
                                    <div>
                                        <p className="font-medium">Remove Integration</p>
                                        <p className="text-muted-foreground text-sm">Permanently disconnect and remove all data</p>
                                    </div>
                                    <Button variant="destructive">Disconnect</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
