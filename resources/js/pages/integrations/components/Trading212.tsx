import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserIntegration } from '@/types/integration';
import { useForm } from '@inertiajs/react';

interface Props {
    userIntegration: UserIntegration;
    children?: React.ReactNode;
}

export default function Trading212({ userIntegration }: Props) {
    const integrationId = 16;

    // API Key Form
    const { data: apiKeyData, setData: setApiKey, post: postApiKey, processing: processingApiKey, errors: apiKeyErrors} = useForm({
        api_key: userIntegration?.api_key || '',
    });
    console.log(userIntegration)

    // Auto-Sync Form
    // const autoSyncForm = useForm({
    //     auto_sync: userIntegration.auto_sync || false,
    // });

    // Sync Frequency Form
    // const syncFrequencyForm = useForm({
    //     sync_frequency: userIntegration.sync_frequency || 'daily',
    // });

    // Handle API Key Submission
    const handleApiKeySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // apiKeyForm.patch(`/userIntegrations/${userIntegration.id}/api-key`);
    };

    // Handle Test Connection
    const handleSaveConnection = () => {
        console.log('posting...')
        postApiKey(`/integrations/${integrationId}/save-connection`);
    };

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
                    <form onSubmit={handleApiKeySubmit}>
                        <div className="space-y-2">
                            <Label htmlFor="api-key">API Key</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="api-key"
                                    type="text"
                                    value={apiKeyData?.api_key}
                                    onChange={(e) => setApiKey('api_key', e.target.value)}
                                    placeholder="Enter your API key"
                                    className="flex-1"
                                    disabled={processingApiKey}
                                />
                                <Button variant="secondary" onClick={handleSaveConnection} disabled={processingApiKey}>
                                    Connect
                                </Button>
                            </div>
                            {apiKeyErrors?.api_key && <p className="text-destructive text-sm font-medium">{apiKeyErrors?.api_key}</p>}
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
