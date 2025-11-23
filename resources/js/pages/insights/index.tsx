import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Insights() {
    return (
        <AppLayout>
            <Head title="Insights" />

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-semibold">Insights</h1>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Spending Trend</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-36" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Investment Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-36" />
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Risk Summary</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-36" />
                        </CardContent>
                    </Card>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Auto Insights</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-56" />
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
