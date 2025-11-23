import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function NetWorth() {
    return (
        <AppLayout>
            <Head title="Net Worth" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Net Worth Explorer</h1>
                    <div className="flex gap-2">
                        <Button>Export</Button>
                        <Button variant="outline">Snapshot</Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Total Net Worth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">£124,200</div>
                        <Skeleton className="mt-4 h-40" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Breakdown by Type</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Historical Snapshots</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
