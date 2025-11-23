import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Notifications() {
    return (
        <AppLayout>
            <Head title="Notifications" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Notifications</h1>
                    <div className="flex gap-2">
                        <Button>Mark all read</Button>
                        <Button variant="ghost">Mute</Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Notification Rules</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-40" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
