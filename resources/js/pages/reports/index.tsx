import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Reports() {
    return (
        <AppLayout>
            <Head title="Reports" />

            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Reports & Exports</h1>
                    <div className="flex gap-2">
                        <Button>Generate PDF</Button>
                        <Button variant="ghost">Schedule</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Net Worth Report</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-28" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Tax Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-28" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Investment Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-28" />
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Export History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-40" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
