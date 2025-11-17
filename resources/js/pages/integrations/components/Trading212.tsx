import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    // CardFooter,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { Switch } from '@/components/ui/switch';
// import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserIntegration } from '@/types/integration';
import { useForm } from '@inertiajs/react';
import React from 'react';

interface Props {
    userIntegration: UserIntegration;
    children?: React.ReactNode;
}

type Credentials = {
    client_id: string;
    client_secret: string;
};

export default function Trading212({ userIntegration }: Props) {
    const integrationKey = 'trading212';
    const initialCredentials = (userIntegration?.credentials ?? { client_id: '', client_secret: '' }) as Credentials;

    // API Key Form
    const { data, setData, post, processing, errors } = useForm<{ integration_key: string; credentials: Credentials }>({
        integration_key: integrationKey,
        credentials: initialCredentials
    });

    const handleSaveConnection = () => {
        // console.log('posting...')
        post(`/integrations/${integrationKey}/save-connection`);
    };

    // Auto-Sync Form
    // const autoSyncForm = useForm({
    //     auto_sync: userIntegration.auto_sync || false,
    // });

    // Sync Frequency Form
    // const syncFrequencyForm = useForm({
    //     sync_frequency: userIntegration.sync_frequency || 'daily',
    // });

    // Handle API Key Submission
    // const handleApiKeySubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     apiKeyForm.patch(`/userIntegrations/${userIntegration.id}/api-key`);
    // };

    // Handle Auto-Sync Change
    // const handleAutoSyncChange = (checked: boolean) => {
    //     autoSyncForm.setData('auto_sync', checked);
    //     autoSyncForm.patch(`/userIntegrations/${userIntegration.id}/auto-sync`);
    // };

    // Handle Sync Frequency Change
    // const handleSyncFrequencyChange = (value: string) => {
    //     syncFrequencyForm.setData('sync_frequency', value);
    //     syncFrequencyForm.patch(`/userIntegrations/${userIntegration.id}/sync-frequency`);
    // };

    // Handle Immediate Sync
    // const handleSyncNow = () => {
    //     post(`/userIntegrations/${userIntegration.id}/sync`);
    // };

    // Handle Disconnect
    // const handleDisconnect = () => {
    //     destroy(`/userIntegrations/${userIntegration.id}`);
    // };

    return (
        <>
            {/* Connection Status Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Connection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="client-id">API Key ID</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="client-id"
                                    type="text"
                                    value={data.credentials?.client_id}
                                    onChange={(e) => setData('credentials', {
                                        ...data.credentials,
                                        client_id: e.target.value,
                                    })}
                                    placeholder="Enter your API Key ID"
                                    className="flex-1"
                                    disabled={processing}
                                />
                            </div>
                            {errors['credentials.client_id'] && (
                                <p className="text-destructive text-sm font-medium">{errors['credentials.client_id']}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="client-secret">Secret Key</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="client-secret"
                                    type="text"
                                    value={data.credentials?.client_secret}
                                    onChange={(e) => setData('credentials', {
                                        ...data.credentials,
                                        client_secret: e.target.value,
                                    })}
                                    placeholder="Enter your secret key"
                                    className="flex-1"
                                    disabled={processing}
                                />
                            </div>
                            {errors['credentials.client_secret'] && (
                                <p className="text-destructive text-sm font-medium">{errors['credentials.client_secret']}</p>
                            )}
                        </div>

                        <div className="flex w-full justify-end">
                            <Button className="mt-2" variant="secondary" isLoading={processing} onClick={handleSaveConnection} disabled={processing}>
                                Connect
                            </Button>
                        </div>
                    </form>

                    {/* <div className="bg-muted flex items-center justify-between rounded-lg p-4">
                        <div>
                            <p className="font-medium">Auto-sync</p>
                            <p className="text-muted-foreground text-sm">Enable automatic data synchronization</p>
                        </div>
                        <Switch checked={autoSyncForm.data.auto_sync} onCheckedChange={handleAutoSyncChange} disabled={autoSyncForm.processing} />
                    </div> */}
                </CardContent>
                {/* <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline" onClick={handleDisconnect} disabled={autoSyncForm.processing || apiKeyForm.processing}>
                        Disconnect
                    </Button>
                </CardFooter> */}
            </Card>

            {/* Data Management Section */}
            {/* <Card>
                <CardHeader>
                    <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-muted flex items-center justify-between rounded-lg p-4">
                        <div>
                            <p className="font-medium">Last Synced</p>
                            <p className="text-muted-foreground text-sm">{userIntegration.last_synced || 'Never synced'}</p>
                        </div>
                        <Button variant="secondary" onClick={handleSyncNow} disabled={syncFrequencyForm.processing}>
                            Sync Now
                        </Button>
                    </div>

                    <div className="space-y-2">
                        <Label>Sync Frequency</Label>
                        <Tabs value={syncFrequencyForm.data.sync_frequency} onValueChange={handleSyncFrequencyChange}>
                            <TabsList>
                                <TabsTrigger value="daily">Daily</TabsTrigger>
                                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                                <TabsTrigger value="manual">Manual</TabsTrigger>
                            </TabsList>
                        </Tabs>
                        {syncFrequencyForm.errors.sync_frequency && (
                            <p className="text-destructive text-sm font-medium">{syncFrequencyForm.errors.sync_frequency}</p>
                        )}
                    </div>
                </CardContent>
            </Card> */}
        </>
    );
}
